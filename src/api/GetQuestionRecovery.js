import { Alert } from "react-native";

export const getQuestionRecovery = (nomeUsuario, setPergunta) => {
    //setLoadingRequest(true)
    const url = 'http://192.168.98.166:8080/parintinsexplore/getquestionrecovery.php';
    
    const requestPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nomeUsuario,
      }),
    })
    .then(response => response.json());
  
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Tempo de requisição excedido. Cheque sua internet'));
        //setLoadingRequest(false);
      }, 15000); // 15 segundos de timeout
    });
  
    Promise.race([requestPromise, timeoutPromise])
      .then(data => {
        console.log(data[0]?.pergunta);
        setPergunta(data[0]?.pergunta)
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error.message);
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar: ' + error.message);
        //setLoadingRequest(false);
      });
}