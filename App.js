import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export default function App() {

  const [frases, setFrases] = useState ({
    frase: "A vida é aquilo que acontece enquanto estamos ocupados fazendo outros planos.", 
    autor: "John Lennon"
    },

  )

  const frasesMarcantes = [
      {
        frase: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", 
        autor: "Winston Churchill"
      },
      {
        frase: "Se você quer viver uma vida feliz, amarre-se a uma meta, não a pessoas ou coisas.", 
        autor: "Albert Einstein"
      },
      {
        frase: "A única coisa que devemos temer é o próprio medo.", 
        autor: "Franklin D. Roosevelt"
      },
      {
        frase: "A imaginação é mais importante que o conhecimento.", 
        autor: "Albert Einstein"
      },
      {
        frase: "A melhor maneira de prever o futuro é criá-lo.", 
        autor: "Peter Drucker"
      },
      {
        frase: "Não é a mais forte das espécies que sobrevive, nem a mais inteligente, mas a que melhor se adapta às mudanças.", 
        autor: "Charles Darwin"
      },
      {
        frase: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", 
        autor: "Nelson Mandela"
      },
      {
        frase: "A vida é 10% o que acontece com você e 90% como você reage a isso.", 
        autor: "Charles Swindoll"
      },
      {
        frase: "A verdadeira viagem de descoberta não consiste em procurar novas paisagens, mas em ter novos olhos.", 
        autor: "Marcel Proust"
      },
      {
        frase: "Você deve ser a mudança que deseja ver no mundo.", 
        autor: "Mahatma Gandhi"
      },
      {
        frase: "Nada é permanente, exceto a mudança.", 
        autor: "Heráclito"
      },
      {
        frase: "Não espere. O tempo nunca será perfeito.", 
        autor: "Napoleon Hill"
      },
      {
        frase: "O único limite para a nossa realização de amanhã são as nossas dúvidas de hoje.", 
        autor: "Franklin D. Roosevelt"
      },
      {
        frase: "O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente.", 
        autor: "Henry Ford"
      },
      {
        frase: "O sucesso normalmente vem para quem está ocupado demais para procurar por ele.", 
        autor: "Henry David Thoreau"
      },
      {
        frase: "A sorte favorece a mente bem preparada.", 
        autor: "Louis Pasteur"
      },
      {
        frase: "A alegria está na luta, na tentativa, no sofrimento envolvido e não na vitória propriamente dita.", 
        autor: "Mahatma Gandhi"
      },
      {
        frase: "Sonhe como se fosse viver para sempre, viva como se fosse morrer hoje.", 
        autor: "James Dean"
      },
      {
        frase: "Acredite que você pode, assim você já está no meio do caminho.", 
        autor: "Theodore Roosevelt"
      }
  ]
  

  function gerarFrase() {
    let random = Math.floor(Math.random() * frasesMarcantes.length);
    setFrases(frasesMarcantes[random])
  }

  return (
    <ScrollView style={{ backgroundColor: "#003366", flex: 1}}>

      <View style={{ backgroundColor:"white", alignItems:'center'}}>
        <Image
          source={require('./assets/logo.png')} 
          style={{width:250, resizeMode:'contain'}}
          />
      </View>

      <View >
        <Text style={styles.title}>Uma frase para você</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.frase}>{frases.frase}</Text>
        <Text style={styles.autor}>{frases.autor}</Text>
      </View>

      <TouchableOpacity style={styles.button}  onPress={gerarFrase}>
        <Text>Gerar Frase</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


