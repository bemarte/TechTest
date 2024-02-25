const testDescription = {
  registerUser: `
  <div>
    <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
    <span style="color: #b22222;"> Registro de Usuário </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>COMO</strong> um visitante do site <br/>
    <strong>QUERO</strong> me cadastrar no site <br/>
    <strong>PARA</strong> ter acesso a recursos exclusivos
  </div>
  <div>
    <span style="color: #800080; font-weight: bold;">Cenario: </span>
    <span style="color: #b22222;"> Cadastro de novo usuário </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> que estou na página inicial do site <br/>
    <strong>QUANDO</strong> clico no botão <strong>"Signup / Login"</strong> <br/>
    <strong>E</strong> preencho meu nome e endereço de e-mail <br/>
    <strong>E</strong> clico no botão <strong>"Signup"</strong> <br/>
    <strong>E</strong> preencho os detalhes: Título, Nome, E-mail, Senha, Data de Nascimento <br/>
    <strong>E</strong> seleciono a caixa de seleção <strong>"Sign up for our newsletter!"</strong> <br/>
    <strong>E</strong> seleciono a caixa de seleção <strong>"Receive special offers from our partners!"</strong> <br/>
    <strong>E</strong> preencho os detalhes adicionais: Primeiro nome, Último nome, Empresa, Endereço, Endereço 2, País, Estado, Cidade, CEP, Número de Celular <br/>
    <strong>E</strong> clico no botão <strong>"Create Account"</strong> <br/>
    <strong>E</strong> clico no botão <strong>"Continue"</strong> <br/>
    <strong>E</strong> clico no botão <strong>"Delete Account"</strong> <br/>
    <strong>ENTÃO</strong> devo ver a mensagem <strong>"ACCOUNT DELETED!"</strong> <br/>
  </div>
  `,
  loginUser: `
  <div>
    <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
    <span style="color: #b22222;"> Login de Usuário </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>COMO</strong> um usuário do site <br/>
    <strong>QUANDO</strong> desejo fazer login na minha conta <br/>
    <strong>PARA</strong> acessar recursos exclusivos
  </div>
  <div>
    <span style="color: #800080; font-weight: bold;">Cenário: </span>
    <span style="color: #b22222;"> Login de usuário com email e senha corretos </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> que estou na página inicial do site <br/>
    <strong>QUANDO</strong> clico no botão <strong>"Signup / Login"</strong> <br/>
    <strong>E</strong> verifico que a mensagem <strong>"Login to your account"</strong> é visível <br/>
    <strong>E</strong> insiro o endereço de email e senha corretos <br/>
    <strong>E</strong> clico no botão <strong>"login"</strong> <br/>
    <strong>ENTÃO</strong> devo ver a mensagem <strong>"Logged in as username"</strong> <br/>
  </div>
  `
  }
  
  export default testDescription;
  