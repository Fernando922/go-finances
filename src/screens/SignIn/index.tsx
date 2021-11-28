import React, { useState } from "react";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

import { RFValue } from "react-native-responsive-fontsize";
import { Alert } from "react-native";

import { useAuth } from "../../hooks/auth";
import AppleSvg from "../../assets/apple-icon.svg";
import LogoSvg from "../../assets/finance-icon.svg";
import GoogleSvg from "../../assets/google-icon.svg";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { ActivityIndicator, Platform } from "react-native";
import { useTheme } from "styled-components";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();
  const {
    colors: { shape },
  } = useTheme();
  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Google");
      setIsLoading(false);
    }
  }
  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Apple");
      setIsLoading(false);
    }
  }
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas{"\n"}finanças de forma{"\n"}muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>Faça seu login com{"\n"}uma das contas abaixo</SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title={"Entrar com Google"}
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SignInSocialButton
              title={"Entrar com Apple"}
              svg={AppleSvg}
              onPress={handleSignInWithApple}
            />
          )}
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            style={{ marginTop: 18 }}
            color={shape}
            size="small"
          />
        )}
      </Footer>
    </Container>
  );
}
