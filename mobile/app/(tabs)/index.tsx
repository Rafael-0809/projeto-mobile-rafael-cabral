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
        <ThemedText type="title">Olá, ...</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo disponível:<ThemedText type='defaultSemiBold'>R$ 00,00</ThemedText></ThemedText>
        <ThemedText type="subtitle">Saldo em poupança:<ThemedText type='defaultSemiBold'>R$ 00,00</ThemedText></ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Últimos lançamentos (extrato)</ThemedText>
        <ThemedText>
          <ul>
            <li>23/04- Depósito via Pix + R$ 00,00</li>
            <li>23/04- Depósito via Pix + R$ 00,00</li>
            <li>23/04- Depósito via Pix + R$ 00,00</li>
            <li>23/04- Depósito via Pix + R$ 00,00</li>
            <li>23/04- Depósito via Pix + R$ 00,00</li>
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
