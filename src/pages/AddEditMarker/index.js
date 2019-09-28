import React, { useState, useEffect } from "react";

import useForm from "react-hook-form";

import {
  StatusBar,
  ActivityIndicator,
  ScrollView,
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

export default function AddEditMarker(props) {
  const { register, setValue, handleSubmit } = useForm();
  const [title, setTitle] = useState();

  useEffect(() => {
    async function handleAddEditMarker() {}

    handleAddEditMarker();
  }, []);

  const onSubmit = async data => {};

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <CardContainer>
        <Title>Adicionar marcador</Title>
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
