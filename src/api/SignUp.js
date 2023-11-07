import { Alert } from "react-native";

export const signUp = (
    
    nome,
    nomeUsuario,
    senha,
    pergunta,
    resposta,
    
    setLoadingRequest,
    navigation,

    setNome,
    setNomeUsuario,
    setSenha,
    setSenhaConf,
    setPergunta,
    setResposta,

    ) => {
    setLoadingRequest(true)
    const url = 'http://192.168.98.166:8080/parintinsexplore/signup.php';
    
    const requestPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        nomeUsuario,
        senha,
        pergunta,
        resposta
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
        console.log(data);
        Alert.alert('Sucesso', 'Seu cadastro foi concluído, agora faça seu login');
        setNome('');
        setNomeUsuario('');
        setSenha('');
        setSenhaConf('');
        setPergunta('');
        setResposta('');
        setLoadingRequest(false);
        navigation.navigate('login');
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error.message);
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar: ' + error.message);
        setLoadingRequest(false);
      });
}