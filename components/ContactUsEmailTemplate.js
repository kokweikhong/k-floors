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

export default function ContactUsEmailTemplate({ data }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New Enquiry From k-floorings.com</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Column align="left" style={tableCell}>
              <Text style={heading}>New Enquiry From k-floorings.com</Text>
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
                    <Text style={informationTableLabel}>EMAIL ADDRESS</Text>
                    <Link
                      style={{
                        ...informationTableValue,
                        color: "#15c",
                        textDecoration: "underline",
                      }}
                    >
                      {data.mail}
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
                    <Text style={informationTableLabel}>REMARKS</Text>
                    <Text style={informationTableValue}>{data.remarks}</Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
