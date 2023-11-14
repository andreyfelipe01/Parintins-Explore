import { Alert } from "react-native";

export const checkUsernameAvailability = async (nomeUsuario, setIsAvailable, setLoading) => {
    setLoading(true);
    try {
      const url = 'http://192.168.144.166:8080/parintinsexplore/verifyuser.php';
  
      const requestPromise = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome_usuario: nomeUsuario,
        }),
      })
      .then(response => response.json());
  
      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Tempo de requisição excedido'));
        }, 15000); // 15 segundos de timeout
      });
  
      const data = await Promise.race([requestPromise, timeoutPromise]);
      
      if (data && data.disponivel !== undefined) {
        setIsAvailable(data.disponivel);
      } else {
        throw new Error('Erro ao verificar a disponibilidade do nome de usuário');
      }
    } catch (error) {
      console.error('Erro ao verificar a disponibilidade do nome de usuário:', error.message);
      setIsAvailable(false);
    } finally {
      setLoading(false);
    }
  };

  export const checkUsernameRegistry = async (nomeUsuario, setLoading, navigation) => {
    setLoading(true);
    try {
      const url = 'http://192.168.144.166:8080/parintinsexplore/verifyuser.php';
  
      const requestPromise = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome_usuario: nomeUsuario,
        }),
      })
      .then(response => response.json());
  
      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Tempo de requisição excedido'));
        }, 15000); // 15 segundos de timeout
      });
  
      const data = await Promise.race([requestPromise, timeoutPromise]);
      
      if (data && data.disponivel !== undefined) {
        if (data.disponivel){
            Alert.alert('Atenção', 'Não foi encontrado seu nome de usuário. Verifique se preencheu corretamente')
        }else{
            navigation.navigate({
                name: 'pergesqsenha',
                params: { user: nomeUsuario},
              });
        }
      } else {
        throw new Error('Erro ao verificar o nome de usuário');
      }
    } catch (error) {
      console.error('Erro ao verificar o nome de usuário:', error.message);
      //setIsAvailable(false);
    } finally {
      setLoading(false);
    }
  };