import { Alert } from "react-native";

export const checkAnswer = (nomeUsuario, resposta, navigation, setLoadingRequest) => {
    if (!resposta){
        Alert.alert('Atenção', 'Preencha a resposta');
        return
    }
    setLoadingRequest(true)
    const url = 'http://192.168.57.166:8080/parintinsexplore/verifyanswer.php';
    
    const requestPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nomeUsuario,
        resposta,
      }),
    })
    .then(response => response.json());
  
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Tempo de requisição excedido. Cheque sua internet'));
        setLoadingRequest(false);
      }, 15000); // 15 segundos de timeout
    });
  
    Promise.race([requestPromise, timeoutPromise])
      .then(data => {
        console.log(data.check);
        let check = data.check
        setLoadingRequest(false);
        if (check){
            Alert.alert('Sucesso', 'Agora insire sua nova senha');
            navigation.navigate({
              name: 'novasenha',
              params: { user: nomeUsuario },
              merge: true,
            });
        }else{
            Alert.alert('Atenção', 'Resposta incorreta. Tente novamente');
        }
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error.message);
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar: ' + error.message);
        setLoadingRequest(false);
      });
}