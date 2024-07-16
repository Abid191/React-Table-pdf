
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  pageOne: {
    justifyContent: 'flex-start',
    padding: 37,
    position: 'relative',
  },
  texts: {
    textAlign: 'center',

  },
  textOne: {
    fontSize: 24,
    marginBottom: 10
  },
  textTree: {
    marginTop: 3
  },
  table: {
    marginTop: 20,
    display: 'table',
    width: 'auto',
  },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal:5
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 0.8,
    height: 'auto',
    padding: 5,
    backgroundColor: 'tomato'
  },
  headerText: {
    fontSize: 5,
  },

  tableColTwo: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 0.8,
    height: 50,
    padding: 4,
    textAlign: 'center',
    display: 'flex',
    alignContent: 'center'
  },
  headerTextTwo: {
    fontSize: 5.5,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    padding: 10,
    display: 'flex',
    textAlign: 'left',
    color: 'black',
    fontSize: 10,
    paddingLeft: 20,
    marginTop: 10,
    borderTop: '1px solid black',
    justifyContent: 'space-between',
  },
  footerText: {
    marginTop: 5,
  },
  pageNumber: {
    marginTop: 5,
  },
  printDateTime: {
    marginTop: 5,
  },

});

// Generate a single table

const Header = () => (
  <View style={styles.texts}>
    <Text style={styles.textOne}> Walton Plaza</Text>
    <Text style={styles.textTwo}> Location: Plaza ( Walton Plaza )</Text>
    <Text style={styles.textTree}> Employee Information</Text>
  </View>
)

const Table = () => {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> SL</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> ID</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Picture</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Employee Name</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Designation</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Last Education</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Responsibility</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Department Name</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Section</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Sub Section</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Group Joining Date</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Present Adress</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> District</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Mobile</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Blood Group</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Grantor</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Nominee</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Reference</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.headerText}> Employee Category</Text>
        </View>
      </View>
      {Array.from({ length: 31 }).map((_, i) => (
        <View style={styles.tableRow} key={i} wrap={false}
          pageBreak="avoid">
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> 1</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> 51354</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> Employee Category</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> Rajib Hosen</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> ##.##</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> BBA</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> </Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> Sales</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> PSD</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> Division-1</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> 16/05/2022</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> </Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> Tangail</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> 01756929248</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> AB+</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> Md. Minhaz</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> </Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> MD.Aminul Haque</Text>
          </View>
          <View style={styles.tableColTwo}>
            <Text style={styles.headerTextTwo}> Probationary</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const Footer = () => (
  <View style={styles.footer} fixed >
    <Text style={styles.footerText}>Design and developed by: Walton Group</Text>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
    <Text style={styles.printDateTime}>Print Date and Time: Monday, 8 July 2024 11:57:44 AM</Text>
  </View>
)


const MyDocument = () => (

  <Document>

    {Array.from({ length: 1 }, (_, pageIndex) => (
      <Page size={'A4'} orientation={'landscape'} style={styles.pageOne} key={pageIndex}>
        <Header></Header>
        {Array.from({ length: 1 }, (_, tableIndex) => (
          <Table key={tableIndex} />
        ))}
        <Footer></Footer>
      </Page>
    ))}
  </Document>
)
const MyApp = () => {
  return (
    <div>
      <PDFViewer width={1200} height={760}>
        <MyDocument></MyDocument>
      </PDFViewer>
    </div>
  )
}

export default MyApp;
