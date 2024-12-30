import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
      padding: 24,
      fontFamily: "Helvetica",
      backgroundColor: "#f7f7f7",
    },
    section: {
      marginBottom: 16,
    },
    container: {
      padding: 16,
      backgroundColor: "#f7f7f7",
      borderRadius: 8,
      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    },
    flexRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    avatar: {
      backgroundColor:"blue" ,
      width: 80,
      height: 80,
      borderRadius: "50%",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
    },
    subtitle: {
      fontSize: 14,
      color: "#555",
    },
    listTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      borderBottom: "1px solid #ccc",
      paddingBottom: 4,
    },
    listItem: {
      fontSize: 12,
      color: "#555",
      marginTop: 4,
    },
    contactInfo: {
      fontSize: 12,
      color: "#555",
      marginTop: 4,
    },
  });