import {
  Html,
  Head,
  Body,
  Text,
  Preview,
  Section,
  Row,
  Column,
  Link,
  Container,
} from "@react-email/components";

const informationTable = {
  borderCollapse: "collapse",
  borderSpacing: "0px",
  color: "rgb(51,51,51)",
  backgroundColor: "rgb(250,250,250)",
  borderRadius: "3px",
  fontSize: "12px",
};

const informationTableRow = {
  height: "46px",
};

const informationTableColumn = {
  paddingLeft: "20px",
  borderStyle: "solid",
  borderColor: "white",
  borderWidth: "0px 1px 1px 0px",
  height: "44px",
};

const resetText = {
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const informationTableLabel = {
  ...resetText,
  color: "rgb(102,102,102)",
  fontSize: "10px",
  textTransform: "uppercase",
};

const informationTableValue = {
  fontSize: "12px",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0",
  padding: "20px 0 48px",
  width: "660px",
};

const tableCell = { display: "table-cell" };

const heading = {
  fontSize: "24px",
  fontWeight: "300",
  lineHeight: 1.5,
  color: "#888888",
};

const subHeading = {
  fontSize: "22px",
  fontWeight: "300",
  lineHeight: 1.5,
  color: "#888888",
};

export default function SampleEmailTemplate({ data }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New Request From k-floorings.com</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Column align="left" style={tableCell}>
              <Text style={heading}>
                New Sample Request From k-floorings.com
              </Text>
            </Column>
          </Section>
          <Section style={informationTable}>
            <Row style={informationTableRow}>
              <Column colSpan={2}>
                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>NAME</Text>
                    <Text style={informationTableValue}>{data.name}</Text>
                  </Column>
                </Row>
                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>COMPANY</Text>
                    <Text style={informationTableValue}>{data.company}</Text>
                  </Column>
                </Row>
                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>EMAIL ADDRESS</Text>
                    <Link
                      style={{
                        ...informationTableValue,
                        color: "#15c",
                        textDecoration: "underline",
                      }}
                    >
                      {data.email}
                    </Link>
                  </Column>
                </Row>
                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>PHONE</Text>
                    <Text style={informationTableValue}>{data.phone}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>DELIVERY / PICKUP</Text>
                    <Text style={informationTableValue}>{data.delivery}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>REMARKS</Text>
                    <Text style={informationTableValue}>{data.remarks}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>ADDRESS LINE 1</Text>
                    <Text style={informationTableValue}>{data.address1}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>ADDRESS LINE 2</Text>
                    <Text style={informationTableValue}>{data.address2}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>CITY</Text>
                    <Text style={informationTableValue}>{data.city}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>POSTCODE</Text>
                    <Text style={informationTableValue}>{data.postcode}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>MAILING</Text>
                    <Text style={informationTableValue}>{data.mailing}</Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          <Section>
            <Column align="left" style={tableCell}>
              <Text style={heading}>Sample Request Information</Text>
            </Column>
          </Section>
          {Array.from(
            data?.data?.map((product, index) => {
              return (
                <Section
                  style={{
                    ...informationTable,
                    margin: 0,
                    marginBottom: "20px",
                  }}
                  key={index}
                >
                  <Column align="left" style={tableCell}>
                    <Text style={`${subHeading}`}>{`${index + 1}) ${
                      product.category.name
                    } | ${product.category.productId}`}</Text>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>APPLICATIONS</Text>
                        <Text style={informationTableValue}>
                          {product?.applications?.join()}
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  {Array.from(
                    product?.items?.map((item, idx) => {
                      return (
                        <Row key={idx}>
                          <Column align="left" style={tableCell}>
                            <Row>
                              <Column style={informationTableColumn}>
                                <Text style={informationTableLabel}>
                                  PRODUCT SKU
                                </Text>
                                <Text style={informationTableValue}>
                                  {item.sku}
                                </Text>
                              </Column>
                            </Row>
                            <Row>
                              <Column style={informationTableColumn}>
                                <Text style={informationTableLabel}>
                                  DIMENSION
                                </Text>
                                <Text style={informationTableValue}>
                                  {item.dimension}
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                        </Row>
                      );
                    })
                  )}
                </Section>
              );
            })
          )}
          {/* {Array.from(data.products).map((product, index)) => {
            return (
              <Section
                style={{ ...informationTable, margin: 0, marginBottom: "20px" }}
                key={key}
              >
                <Row style={informationTableRow}>
                  <Column>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>
                          PRODUCT NAME / SKU
                        </Text>
                        <Text style={informationTableValue}>{key}</Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>APPLICATIONS</Text>
                        <Text style={informationTableValue}>
                          {value?.application?.join()}
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Section>
            );
          })} */}
        </Container>
      </Body>
    </Html>
  );
}
