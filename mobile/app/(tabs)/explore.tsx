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
          <li>Chave cadastrada:</li>
          {"\n"}<button>Enviar dinheiro</button>{"\n"}
          <button>Receber dinheiro</button>
          <p>Minhas faturas recentes:</p>
          <li>23/04- Recebeu R$ 00,00 de ...</li>
          <li>20/04- Enviou R$ 00,00 para ...</li>
        </ul>
      </ThemedText>
      <Collapsible title="Cartão de crédito:">
        <ThemedText>
          <ul>
            <li>Fatura anual: R$: 00,00</li>
            <li>Limite disponível: R$ 00,00</li>
            <li>Última compra: R$ 00,00 - Loja a 20/04</li>
          </ul>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Cartão virtual">
        <ThemedText>
          <ul>
            <li>Criado em 10/04</li>
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
