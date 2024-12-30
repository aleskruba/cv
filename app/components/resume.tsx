"use client"
import React from 'react'
import { Page, Text, View, Document, PDFViewer,Image } from '@react-pdf/renderer';
import { styles } from './style';
import { useEffect, useState } from "react";




export const MyCV = () => { 
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    const savedNote = localStorage.getItem("note"); // Retrieve the note from local storage
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);
    return(


  <Document>
  <Page size="A4" style={styles.page}>

    <View style={[styles.section, styles.flexRow]}>
      <Image
        src="/avatar.png"
        style={styles.avatar}
      />
      <View>
        <Text style={styles.title}>Aleš Krúba</Text>
        <Text style={styles.subtitle}>Born: 1978</Text>
        <Text style={styles.subtitle}>{note}</Text>
        
      </View>
    </View>

    {/* Work Experience */}
    <View style={styles.section}>
      <Text style={styles.listTitle}>Work Experience</Text>
      <View>
        <Text style={styles.listItem}>
          <Text style={{ fontWeight: "bold" }}>DHL:</Text> 1998 - 2004
        </Text>
        <Text style={styles.listItem}>
          <Text style={{ fontWeight: "bold" }}>Ptáček:</Text> 2004 - 2005
        </Text>
        <Text style={styles.listItem}>
          <Text style={{ fontWeight: "bold" }}>Plastochem:</Text> 2005 - 2015
        </Text>
        <Text style={styles.listItem}>
          <Text style={{ fontWeight: "bold" }}>DOKRAM:</Text> 2015 - Present
        </Text>
      </View>
    </View>

    {/* Skills */}
    <View style={styles.section}>
      <Text style={styles.listTitle}>Skills</Text>
      <View>
        <Text style={styles.listItem}>Transport Logistics</Text>
        <Text style={styles.listItem}>Amateur Full-Stack Web Development</Text>
        <Text style={styles.listItem}>JavaScript, React.js, Next.js</Text>
      </View>
    </View>

    {/* Contact Info */}
    <View style={styles.section}>
      <Text style={styles.listTitle}>Contact Information</Text>
      <Text style={styles.contactInfo}>Email: aleks.kruba@example.com</Text>
      <Text style={styles.contactInfo}>Phone: +420 123 456 789</Text>
    </View>
  </Page>
</Document>

  
  )

}


