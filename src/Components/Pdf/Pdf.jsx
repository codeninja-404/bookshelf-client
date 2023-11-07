import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      margin: 10,
    },
    header: {
      fontSize: 20,
      marginBottom: 10,
    },
  });

const Pdf = ({ book }) => {

  return (
    <Document>
      <Page size="A4">
        <View style={styles.page}>
          <Text style={styles.header}>{book?.name?.toUpperCase()}</Text>
          <Text style={styles.text}>By {book?.authorName?.toUpperCase()}</Text>
          <Text>{book?.description}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
