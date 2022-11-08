import react,{Component} from 'react'
export class ChatBot extends Component {
    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"251f06c6188cf3e1b9324b7d103673c4b","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
            

    }
       

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ChatBot;
