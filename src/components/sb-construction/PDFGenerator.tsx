import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

interface PDFGeneratorProps {
  data: {
    selectedServices: string[];
    serviceDetails: Record<string, { name: string; isPriority: boolean; description: string }>;
    selectedAreas: string[];
    keywords: string[];
    colorSources: string[];
    websiteUrl: string;
    brandingNotes: string;
    designTheme: string;
    designStyle: string;
    socialMedia: Record<string, string>;
    projectTimeline: string;
    specialFeatures: string;
    businessHours: string;
    providesEmergencyService: boolean;
  };
}

const PDFDocument = ({ data }: PDFGeneratorProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Construction Website Requirements</Text>
        
        <Text style={styles.subtitle}>Services</Text>
        {data.selectedServices.map((service, index) => (
          <View key={index}>
            <Text style={styles.text}>• {service}</Text>
            {data.serviceDetails[service]?.description && (
              <Text style={styles.text}>  Details: {data.serviceDetails[service].description}</Text>
            )}
          </View>
        ))}

        <Text style={styles.subtitle}>Service Areas</Text>
        {data.selectedAreas.map((area, index) => (
          <Text key={index} style={styles.text}>• {area}</Text>
        ))}

        <Text style={styles.subtitle}>Design Preferences</Text>
        <Text style={styles.text}>Theme: {data.designTheme}</Text>
        <Text style={styles.text}>Style: {data.designStyle}</Text>
        
        {data.brandingNotes && (
          <View>
            <Text style={styles.subtitle}>Branding Notes</Text>
            <Text style={styles.text}>{data.brandingNotes}</Text>
          </View>
        )}

        {data.projectTimeline && (
          <View>
            <Text style={styles.subtitle}>Project Timeline</Text>
            <Text style={styles.text}>{data.projectTimeline}</Text>
          </View>
        )}

        {data.specialFeatures && (
          <View>
            <Text style={styles.subtitle}>Special Features</Text>
            <Text style={styles.text}>{data.specialFeatures}</Text>
          </View>
        )}

        {data.businessHours && (
          <View>
            <Text style={styles.subtitle}>Business Hours</Text>
            <Text style={styles.text}>{data.businessHours}</Text>
          </View>
        )}

        <Text style={styles.text}>
          Emergency Service: {data.providesEmergencyService ? 'Yes' : 'No'}
        </Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;