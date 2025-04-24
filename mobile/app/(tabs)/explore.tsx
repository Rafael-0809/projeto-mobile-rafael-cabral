import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'rgb(155 2 214)', dark: 'rgb(155 2 214)' }}
      headerImage={
        <IconSymbol
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pix</ThemedText>
      </ThemedView>
      <ThemedText>
        <ul>
          <li>Chave cadastrada: @mateus.alves.silva29@escola.pr.gov.br</li>
          {"\n"}<button>Enviar dinheiro</button>{"\n"}
          <button>Receber dinheiro</button>
          <h4>Minhas transações recentes: </h4>
          <li>23/04- Recebeu R$ 500,00 de Rafael</li>
          <li>20/04- Enviou R$ 50,00 para João</li>
        </ul>
      </ThemedText>
      <ThemedText type="title">Cartões</ThemedText>
      <Collapsible title="Cartão de crédito:">
        <ThemedText>
          <ul>
            <li>Fatura atual: R$: 6.320,55</li>
            <li>Limite disponível: R$ 8.679,45</li>
            <li>Última compra: R$ 95,00 - MC Donald's 25/04</li>
          </ul>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Cartão virtual:">
        <ThemedText>
          <ul>
            <li>Criado em 10/08/24</li>
            <li>Limite compartilhado com cartão principal</li>
          </ul>
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
