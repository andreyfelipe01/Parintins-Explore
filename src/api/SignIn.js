import { Alert } from "react-native";

export const signIn = (nomeUsuario, senha, navigation, setLoadingRequest) => {
    if (!nomeUsuario){
        Alert.alert('Atenção', 'Preencha o nome de usuário');
        return
    }
    if (!senha){
        Alert.alert('Atenção', 'Preencha a senha');
        return
    }
    setLoadingRequest(true)
    const url = 'http://192.168.98.166:8080/parintinsexplore/signin.php';
    
    const requestPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nomeUsuario,
        senha,
      }),
    })
    .then(response => response.text());
  
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Tempo de requisição excedido. Cheque sua internet'));
        setLoadingRequest(false);
      }, 15000); // 15 segundos de timeout
    });
  
    Promise.race([requestPromise, timeoutPromise])
      .then(data => {
        console.log(data);
        if (data == 'Sucessfull') {
            navigation.navigate('Home');
            setLoadingRequest(false);
        } else {
            Alert.alert('Erro', 'Usuário ou senha incorretas');
            setLoadingRequest(false);
        }
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error.message);
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar: ' + error.message);
        setLoadingRequest(false);
      });
}