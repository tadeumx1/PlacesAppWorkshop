import React, { useState, useEffect } from "react";

import useForm from "react-hook-form";

import {
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
  ScrollView,
  Alert
} from "react-native";
import api from "../../services/api";

import {
  Container,
  Title,
  Label,
  FormContainer,
  CardContainer,
  TextInformation,
  Error,
  Form,
  Input,
  Button,
  ButtonText
} from "./styles";

const ADDRESS_COUNTRY = "Brasil"

export default function AddEditMarker(props) {
  const { register, setValue, handleSubmit } = useForm();
  const [markerUpdate, setMarkerUpdate] = useState(false);
  const [title, setTitle] = useState('Adicionar marcador');

  useEffect(() => {
    async function handleAddEditMarker() {
      console.log('markerId')
      console.log(props.navigation.getParam("markerId"))
      if (props.navigation.getParam("markerId")) {
        console.log('entrou')
        setMarkerUpdate(true)
        setTitle("Editar marcador")
      }
    }

    handleAddEditMarker();
  }, []);

  const onSubmit = async data => {

    const {
      streetPlace,
      numberPlace,
      ZipCodePlace,
      statePlace,
      companyID
    } = data;

    const placeCreateRequest = {
      address_street: streetPlace,
      address_number: numberPlace,
      address_zip_code: ZipCodePlace,
      address_state: statePlace,
      address_country: ADDRESS_COUNTRY,
      company_id: companyID
    };

    console.log(placeCreateRequest);

    if(!markerUpdate) {

      console.log('certo');

    // const response = await api.post('/places', placeCreateRequest)
    // console.log(response.data)

    /* if(response.data) {
        Alert(
          "Mensagem",
          "Estabelecimento criado com sucesso"
        )
      } */

    } else {

      // Chamar o PUT da API para atualizar os dados do marcador

    }

  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <CardContainer>
        <Title>{title}</Title>
      </CardContainer>

      <ScrollView>
        <FormContainer>
          <Form>
            <Label>Rua do estabelecimento</Label>

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite a rua"
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              ref={register({ name: "streetPlace" })}
              onChangeText={text => setValue("streetPlace", text)}
            />
          </Form>

          <Form>
            <Label>Número do estabelecimento</Label>

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite o número"
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              ref={register({ name: "numberPlace" })}
              onChangeText={text => setValue("numberPlace", text)}
            />
          </Form>

          <Form>
            <Label>CEP do estabelecimento</Label>

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite o CEP"
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              ref={register({ name: "ZipCodePlace" })}
              onChangeText={text => setValue("ZipCodePlace", text)}
            />
          </Form>

          <Form>
            <Label>Estado do estabelecimento</Label>

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite o estado"
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              ref={register({ name: "statePlace" })}
              onChangeText={text => setValue("statePlace", text)}
            />
          </Form>

          <Form>
            <Label>ID da empresa responsável pelo estabelecimento</Label>

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite o ID da empresa"
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              ref={register({ name: "companyID" })}
              onChangeText={text => setValue("companyID", text)}
            />
          </Form>

          <Button onPress={handleSubmit(onSubmit)}>
            <ButtonText>Prosseguir</ButtonText>
          </Button>
        </FormContainer>
      </ScrollView>
    </Container>
  );
}

AddEditMarker.navigationOptions = () => {
  return {
    header: null
  };
};
