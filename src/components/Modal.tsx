import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
const CustomPortal = ({ children, style }) => (
    <Portal>
      <Modal visible>
        <Text style={[styles.portal, style]}>{children}</Text>
      </Modal>
    </Portal>
  );
const MyModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  
  return (
    <PaperProvider>
      <CustomPortal style={styles.portal}>
        Example Portal. Click outside this area to dismiss.
      </CustomPortal>
      <Button style={styles.button} onPress={showModal}>
        Show
      </Button>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor:'red'
    },
    portal: {
        backgroundColor: 'white',
        padding: 16,
        width: '100%',
        borderRadius: 8,
      },
      button: {
        marginTop: 30,
      },
})

export default MyModal;