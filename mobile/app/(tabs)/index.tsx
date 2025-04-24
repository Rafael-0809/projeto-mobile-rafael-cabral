import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'rgb(155 2 214)', dark: 'rgb(155 2 214)' }}
      headerImage={
        <Image
          source={require('@/assets/images/nubank.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, Mateus</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{"\n"}Saldo disponível:<ThemedText type='defaultSemiBold'> R$ 4.256,96</ThemedText></ThemedText>
        <ThemedText type="subtitle">Saldo em poupança:<ThemedText type='defaultSemiBold'> R$ 1.500,00</ThemedText></ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Últimos lançamentos (extrato)</ThemedText>
        <ThemedText>
          <ul>
            <li>23/04- Depósito via Pix + R$ 500,00</li>
            <li>19/04- Pagamento Netflix - R$ 59,90</li>
            <li>15/04- Posto de gasolina - R$ 250,00</li>
            <li>09/04- Salário recebido + R$ 4.000,00</li>
            <li>08/04- Compra no mercado - R$ 800,00</li>
          </ul>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
