"use client";

import { createContext, useContext, useReducer } from "react";
// import data from "../data/product.json";
import { products } from "@/data/products";
import { categories } from "@/data/productCategory";
import { IProduct } from "@/types/product";
import { IProductCategory } from "@/types/productCategory";

export interface IProductContext {
  categories: IProductCategory[];
  products: IProduct[];
  addCategory: (productID: string) => void;
  removeCategory: (productID: string) => void;
  initProducts: () => void;
  addSelected: (sku: string) => void;
  removeSelected: (sku: string) => void;
  resetSelected: () => void;
}

export interface IAction {
  type: string;
  sku?: string;
  productID?: string;
}

const initialState = {
  categories: categories.map((e) => ({ ...e, isSelected: false })),
  products: products.map((e) => ({ ...e, isSelected: false })),
  addCategory: (productID: string) => {},
  removeCategory: (productID: string) => {},
  initProducts: () => {},
  addSelected: (sku: string) => {},
  removeSelected: (sku: string) => {},
  resetSelected: () => {},
};

const actions = {
  INIT_ITEM: "INIT_ITEM",
  ADD_SELECTED_ITEM: "ADD_SELECTED_ITEM",
  REMOVE_SELECTED_ITEM: "REMOVE_SELECTED_ITEM",
  RESET_SELECTED_ITEM: "RESET_SELECTED_ITEM",
  ADD_CATEGORY: "ADD_CATEGORY",
  REMOVE_CATEGORY: "REMOVE_CATEGORY",
};

const reducer = (state: IProductContext, action: IAction) => {
  switch (action.type) {
    case actions.ADD_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((e) =>
          e.productId === action.productID ? { ...e, isSelected: true } : e
        ),
      };
    case actions.REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((e) =>
          e.productId === action.productID ? { ...e, isSelected: false } : e
        ),
      };
    case actions.INIT_ITEM:
      return {
        ...state,
        categories: categories.map((ele) => {
          return { ...ele, isSelected: false };
        }),
        products: products.map((ele) => {
          return { ...ele, isSelected: false };
        }),
      };

    case actions.ADD_SELECTED_ITEM:
      return {
        ...state,
        products: state.products.map((ele) => {
          return ele.sku === action.sku ? { ...ele, isSelected: true } : ele;
        }),
      };
    case actions.REMOVE_SELECTED_ITEM:
      return {
        ...state,
        products: state.products.map((ele) => {
          return ele.sku === action.sku ? { ...ele, isSelected: false } : ele;
        }),
      };
    case actions.RESET_SELECTED_ITEM:
      return {
        ...state,
        categories: categories.map((ele) => {
          return { ...ele, isSelected: false };
        }),
        products: state.products.map((ele) => {
          return { ...ele, isSelected: false };
        }),
      };
    default:
      return state;
  }
};

export const ProductContext = createContext<IProductContext>(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    products: state.products,
    categories: state.categories,
    addCategory: (productID: string) => {
      dispatch({ type: actions.ADD_CATEGORY, productID });
    },
    removeCategory: (productID: string) => {
      dispatch({ type: actions.REMOVE_CATEGORY, productID });
    },
    initProducts: () => {
      dispatch({ type: actions.INIT_ITEM });
    },
    addSelected: (sku: string) => {
      dispatch({ type: actions.ADD_SELECTED_ITEM, sku });
    },
    removeSelected: (sku: string) => {
      dispatch({ type: actions.REMOVE_SELECTED_ITEM, sku });
    },
    resetSelected: () => {
      dispatch({ type: actions.RESET_SELECTED_ITEM });
    },
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
