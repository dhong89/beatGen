import "./styles/index.scss";
import "regenerator-runtime/runtime.js";
import * as Tone from "tone";

// window.addEventListener('DOMContentLoaded', () => {

// const synths = [
//   new Tone.MembraneSynth(),
//   new Tone.MembraneSynth(),
//   new Tone.MembraneSynth()
// ];

// // synths[0].oscillator.type = 'triangle';
// // synths[1].oscillator.type = 'sine';
// // synths[2].oscillator.type = 'sawtooth';

// synths[0].toMaster();
// synths[1].toMaster();
// synths[2].toMaster();

// // debugger

// const $rows = document.body.querySelectorAll('div.drums > div.kick'),
//   notes = ['G5', 'E4', 'C3'];
// let index = 0;

// Tone.Transport.scheduleRepeat(repeat, '8n');

//   document.getElementById("start").addEventListener('click', async () => {
//     await Tone.start()
//     console.log('audio is ready')
//   })

// const play = document.body.querySelector(".play-btn");

// play.addEventListener("click", async () => {
//   // debugger
//   Tone.start();
//   Tone.Transport.start();
// });

// const stop = document.body.querySelector(".stop-btn");

// stop.addEventListener("click", async () => {
//           Tone.Transport.toggle();
// });

// function repeat(time) {
//   let step = index % 8;
//   for (let i = 0; i < $rows.length; i++) {
//     let synth = synths[i],
//       note = notes[i],
//       $row = $rows[i],
//       $input = $row.querySelector(`input:nth-child(${step + 1})`);
//       // debugger
//     if ($input.checked) synth.triggerAttackRelease(note, '8n', time);
//   }
//   index++;
// }

// })

function sequencer() {
  /////////
  // const audio = document.querySelector('audio');
  // const actx  = Tone.context;
  // const dest  = actx.createMediaStreamDestination();
  // const recorder = new MediaRecorder(dest.stream);
  // const chunks = [];

  // recorder.ondataavailable = evt => chunks.push(evt.data);
  // recorder.onstop = evt => {
  //     let blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
  //     audio.src = URL.createObjectURL(blob);
  // }

  // Tone.Transport.start();
  /////////

  const kick = new Tone.Player("./src/sounds/drums/kick-808.wav").toMaster();
  const snare = new Tone.Player("./src/sounds/drums/snare-808.wav").toMaster();
  const hat = new Tone.Player("./src/sounds/drums/hihat-analog.wav").toMaster();
  const clap = new Tone.Player("./src/sounds/drums/clap-tape.wav").toMaster();
  const perc = new Tone.Player("./src/sounds/drums/perc-808.wav").toMaster();
  const shaker = new Tone.Player(
    "./src/sounds/drums/shaker-shuffle.wav"
  ).toMaster();

  const $kickRows = document.body.querySelectorAll("div.drums > div.kick");
  const $snareRows = document.body.querySelectorAll("div.drums > div.snare");
  const $hatsRows = document.body.querySelectorAll("div.drums > div.hat");
  const $clapsRows = document.body.querySelectorAll("div.drums > div.clap");
  const $percsRows = document.body.querySelectorAll("div.drums > div.perc");
  const $shakersRows = document.body.querySelectorAll("div.drums > div.shaker");

  const kickInput = document.body.querySelectorAll(
    "div.drums  div.kick  input"
  );
  const snareInput = document.body.querySelectorAll(
    "div.drums  div.snare  input"
  );
  const hatInput = document.body.querySelectorAll("div.drums  div.hat  input");
  const clapInput = document.body.querySelectorAll(
    "div.drums  div.clap  input"
  );
  const percInput = document.body.querySelectorAll(
    "div.drums  div.perc  input"
  );
  const shakerInput = document.body.querySelectorAll(
    "div.drums  div.shaker  input"
  );

  let index = 0;

  const play = document.body.querySelector(".play-btn");

  play.addEventListener("click", async () => {
    Tone.start();
    Tone.Transport.start();
    // recorder.start();
  });

  const stop = document.body.querySelector(".stop-btn");

  stop.addEventListener("click", async () => {
    Tone.Transport.toggle();
    // recorder.stop();
  });

  Tone.Transport.scheduleRepeat(repeat, "8n");

  function repeat() {
    let step = index % 16;
    for (let i = 0; i < $kickRows.length; i++) {
      let $kickRow = $kickRows[i];
      let $snareRow = $snareRows[i];
      let $hatRow = $hatsRows[i];
      let $clapRow = $clapsRows[i];
      let $percRow = $percsRows[i];
      let $shakerRow = $shakersRows[i],
        $kickInput = $kickRow.querySelector(`input:nth-child(${step + 1})`),
        $snareInput = $snareRow.querySelector(`input:nth-child(${step + 1})`),
        $hatInput = $hatRow.querySelector(`input:nth-child(${step + 1})`),
        $clapInput = $clapRow.querySelector(`input:nth-child(${step + 1})`),
        $percInput = $percRow.querySelector(`input:nth-child(${step + 1})`),
        $shakerInput = $shakerRow.querySelector(`input:nth-child(${step + 1})`);

      $kickInput.style.boxShadow = "0 0 1px grey,0 0 2px grey, 0 0 4px grey";
      $snareInput.style.boxShadow = "0 0 1px grey,0 0 2px grey, 0 0 4px grey";
      $hatInput.style.boxShadow = "0 0 1px grey,0 0 2px grey, 0 0 4px grey";
      $clapInput.style.boxShadow = "0 0 1px grey,0 0 2px grey, 0 0 4px grey";
      $percInput.style.boxShadow = "0 0 1px grey,0 0 2px grey, 0 0 4px grey";
      $shakerInput.style.boxShadow = "0 0 1px grey,0 0 2px grey, 0 0 4px grey";

      if (step !== 0) {
        kickInput[step - 1].style.boxShadow = "";
        snareInput[step - 1].style.boxShadow = "";
        hatInput[step - 1].style.boxShadow = "";
        clapInput[step - 1].style.boxShadow = "";
        percInput[step - 1].style.boxShadow = "";
        shakerInput[step - 1].style.boxShadow = "";
      } else if (step === 0) {
        kickInput[kickInput.length - 1].style.boxShadow = "";
        snareInput[kickInput.length - 1].style.boxShadow = "";
        hatInput[kickInput.length - 1].style.boxShadow = "";
        clapInput[kickInput.length - 1].style.boxShadow = "";
        percInput[kickInput.length - 1].style.boxShadow = "";
        shakerInput[kickInput.length - 1].style.boxShadow = "";
      }

      if ($kickInput.checked) {
        kick.start();
      }
      if ($snareInput.checked) {
        snare.start();
      }
      if ($hatInput.checked) {
        hat.start();
      }

      if ($clapInput.checked) {
        clap.start();
      }
      if ($percInput.checked) {
        perc.start();
      }
      if ($shakerInput.checked) {
        shaker.start();
      }
    }
    index++;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  sequencer();
});
