const recognition = new webkitSpeechRecognition();

recognition.continuous = false;
recognition.interimResults = true;
recognition.lang = 'uz';

const elStartBtn = document.querySelector('#start_btn');

elStartBtn.addEventListener('click', () =>{
    recognition.start();
});

recognition.onresult = (event) => {
    let interimTranscript = '';
    let finalTranscript = '';
  
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }
  
    
    elSearchInput.value = finalTranscript;
};

