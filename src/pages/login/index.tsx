import * as S from "./style";
import { LoginImage, LogoGrenke } from "../../assets/index";
import { Button } from "../../components/button";
import { useThemes } from "../../theme/provider";
export default function Login() {
  const { currentTheme } = useThemes();
  return (
    <S.Main>
      <S.WarpContainer>
        <S.Container>
          <S.WarpLogo>
            <S.Logo src={LogoGrenke} alt="Logo da Grenke" />
          </S.WarpLogo>
          <S.Description>
            Bem-Vindo de volta faça login para continuar
          </S.Description>
          <S.WarpText>
            <S.ContainerInput>
              <S.WarpInput>
                <S.Label>Email</S.Label>
                <S.Input type="email" placeholder="email@gmail.com" />
                <S.Error>Email erro</S.Error>
              </S.WarpInput>
              <S.WarpInput>
                <S.Label>Senha</S.Label>
                <S.Input type="password" placeholder="sua senha" />
                <S.Error>Senha erro</S.Error>
              </S.WarpInput>
            </S.ContainerInput>
            <Button
              title="Entrar"
              height="40px"
              background={currentTheme.colors.Blue270}
            />
          </S.WarpText>
          <S.Reserved>℗ 2024 Arthur Ferreira, All rigths reserved. </S.Reserved>
        </S.Container>
        <S.Container>
          <S.Img src={LoginImage} alt="mulher segurando um notebook" />
        </S.Container>
      </S.WarpContainer>
    </S.Main>
  );
}
