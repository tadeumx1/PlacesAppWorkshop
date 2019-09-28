import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const PlaceItem = ({ place }) => (

    <View style={styles.container}>

        <Image
          style={styles.image}
          source={{uri: 'https://www.99contratos.com.br/imagens/artigos/estabelecimento-comercial.png'}}
        />

        <View style={styles.infoContainer}>

            <Text style={styles.addressStreet}>Avenida Goiás, 184 - Setor Central</Text>
            <Text style={styles.addressState}>São Paulo, SP</Text>
            <Text style={styles.addressState}>77315-970</Text>
        
        </View>

    </View>
);

export default PlaceItem;
