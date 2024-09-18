This project is made of react-pdf.
React-pdf is React Plugin.
It can install like this.
Install by executing "npm install react-pdf".
In react-pdf,you need to import like this plugins.

import { PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

Like this, you can use some props of react-pdf.

<PDFViewer className='full-content'>
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text>Welcome to my github</Text>
                </View>
            </Page>
        </Document>
</PDFViewer>
