import ReactDOM from 'react-dom';

import { Overlay, Card, Message } from './styles';

export default function Success() {
  return ReactDOM.createPortal(
    <Overlay>
      <Card>
        <Message>Formulário enviado com sucesso</Message>
      </Card>
    </Overlay>,
    document.getElementById('success-root'),
  );
}
