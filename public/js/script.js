// Output Video Length & Output End Card Length Value
const videoSlide            = document.getElementById('output-slider');
const videoOutput           = document.getElementsByTagName('output')[0];
const videoProcessBar       = document.getElementById('video-process-bar');
let videoSlideDefaultValue  = 7;
let videoSlideGap           = 0;
let videoDefaultMin         = 7;
let videoDefaultMax         = 20;
let videoCurrentlyValue     = 0;
let videoNewValue           = 0;

const endCardSlide          = document.getElementById('end-card-slider');
const endCardOutput         = document.getElementById('endcard-slider-value');
const endCardProcessBar     = document.getElementById('endcard-process-bar');
let endCardNewValue         = 0;
let endCardSlideGap         = 0;
let endCardDefaultMin       = 0;
let endCardDefaultMax       = 13;
let endcardDefaultValue     = 3;
let availableRang           = 0;

const messageContainer      = document.getElementById('message-container');
const messageBox            = document.getElementById('message-box');
const banner                = document.getElementById('banner');
const messageType           = document.getElementById('message-title');
const iconType              = document.getElementById('icon-type');
const messageSubject        = document.getElementById('subject');
const messageDetail         = document.getElementById('message-detail');
const closeBtn              = document.getElementById('close');
const idPath                = document.getElementById('id-path');
const runBtn                = document.getElementById('run');

const videoMarginLeft       = [1, 23, 46, 68, 91, 113, 135, 158, 180, 202, 225, 247, 282, 309];
const videoBarWidth         = [0, 26, 49, 72, 97, 121, 144, 166, 189, 212, 236, 258, 281, 305];
const endcardMarginLeft     = [302, 280, 257, 235, 212, 190, 169, 145, 123, 101, 74, 52, 29, 7];
const endcardWidth          = [2, 24, 47, 69, 94, 116, 139, 162, 185, 208, 232, 255, 278, 301];

const loaderContainer       = document.getElementById('loader-container');
const loaderWarp            = document.getElementById('loader-warp');
let loadingSubject          = document.getElementById('loading-text');
let loadingPercentage       = document.getElementById('loading-number');

const accordion             = document.getElementsByClassName("accordion");
const videoTransition       = document.getElementById('video-transition');
const videoTransitionOption = videoTransition.getElementsByTagName('li');
const audioTransition       = document.getElementById('audio-transition');
const audioTransitionOption = audioTransition.getElementsByTagName('li');
let videoCurrentOption;
let videoCurrentOptionText;
let audioCurrentOption;
let audioCurrentOptionText;
let accordionContainer;
let panel;

let targetOutputLength      = document.getElementsByClassName('video-btn');
let targetendcardLength     = document.getElementsByClassName('endcard-btn');

const timeToggle            = document.getElementById('time-toggle');
const secFormat             = document.getElementById('sec-format');
const frameFormat           = document.getElementById('frame-format');
const recreateToggle        = document.getElementById('recreate-toggle');
const hiVideo               = document.getElementById('hi-video');
const lowVideo              = document.getElementById('low-video');
const trackLock             = document.getElementById('track-locker');
const link                  = document.getElementById('track-link');
const lock                  = document.getElementById('track-lock');
const transitionsBox        = document.getElementById('transitions-box');

let videoTransitionTitle    = document.getElementById('video-transition-title');
let audioTransitionTitle    = document.getElementById('audio-transition-title');
const videoLengthField      = document.getElementById('video-length-field');
const endcardLengthField    = document.getElementById('end-card-length-field');
const videoMegBox           = document.getElementById('video-meg-box');
const endcardMegBox         = document.getElementById('endcard-meg-box');
const videoInputMessage     = document.getElementById('video-input-message');
const endcardInputMessage   = document.getElementById('endcard-input-message');

const noBtn                 = document.getElementById('no-btn');
const yesBtn                = document.getElementById('yes-btn');

const idPathInputMessage    = document.getElementById('idPath-input-message');
const idPathMegBox          = document.getElementById('idPath-meg-box');

let idPathPassInputCheck    = false;
let videoInputPassCheck     = true;
let endcardInputCheck       = true;

const libraryBtn            = document.getElementById('library-btn');
const libraryBox            = document.getElementById('library-box');
const header                = document.getElementById('header');
const iconClose             = document.getElementById('icon-close');

const settingBtn = document.getElementById('setting-btn');
const settingPanel = document.getElementById('setting-panel');
const settingCloseIcon = document.getElementById('setting-close-icon');

// window on load
window.onload = function(){
    //remove the check passcode process start from here
    //removeLoading();
    // jQuery('.header').hide();
    // jQuery('.video-container').hide();
    // jQuery('.removeLeft').removeClass('control-panel-container');
    // jQuery('.removeTop').removeClass('header-container');
    // jQuery('.removeRight').removeClass('video-player-widget');
    // jQuery('.removeBottom').removeClass('user-control-widget');
    //
    // jQuery('#submit').on('click', function(e) {
    //     e.preventDefault();
    //     let passCodeValue = jQuery('.pass-code')[0].value;
    //     if(passCodeValue) {
    //         if(passCodeValue == 'UX2020') {
    //             jQuery('.header').show();
    //             jQuery('.video-container').show();
    //             jQuery('.removeLeft').addClass('control-panel-container');
    //             jQuery('.removeTop').addClass('header-container');
    //             jQuery('.removeRight').addClass('video-player-widget');
    //             jQuery('.removeBottom').addClass('user-control-widget');
    //
    //             jQuery('.disloagBg').hide();
    //             jQuery('.disloag').hide();
    //         } else {
    //             jQuery('.error-message-box').css("display", "block");
    //             setInterval( function () {
    //                 jQuery('.error-message-box').css("display", "none");
    //             }, 3500);
    //         }
    //     }
    // });
}

// global function to show the loading process
function showLoading(subject) {
    // loaderContainer.style.display = "inline-block";
    // loaderWarp.style.display = "block";
}

function removeLoading() {
    // loaderContainer.style.display = "none";
    // loaderWarp.style.display = "none";
}

jQuery(idPath).on("change keyup keypress paste click", function(e){
    if (idPath.value.length < 11) {
        idPathMegBox.style.display = "block";
        idPath.classList.add('id-focus');
        idPathInputMessage.innerHTML = 'Url or ID should be longer than 11 characters.';
        idPathPassInputCheck = false;
    } else {
        idPathMegBox.style.display = "none";
        idPath.classList.remove('id-focus');
        idPathPassInputCheck = true;
    }
})
// Input field validation
jQuery("#video-length-field").on("change keyup keypress paste click", function(e){
    let videoValue = this.value;
    if ( videoValue < 7 || videoValue > 30 || e.which === 190 || videoValue.includes('.')) {
        videoLengthField.style.border = "1px solid #EA4335";
        videoLengthField.style.background= '#FCE8E6';
        videoMegBox.style.display = "block";
        videoInputMessage.innerHTML = 'The length should be an integer & between  7 - 30 sec.';
        videoInputPassCheck = false;
    } else {
        videoMegBox.style.display = "none";
        videoLengthField.style.background= '#E7EDF3';
        videoLengthField.style.border = "none";
        videoInputPassCheck = true;
    }
})

jQuery("#end-card-length-field").on("change keyup keypress paste click", function(e){
    let endcardValue = this.value;
    if ( endcardValue == '' || endcardValue > 13 || endcardValue < 0 || e.which === 190 || endcardValue.includes('.')) {
        endcardLengthField.style.border = "1px solid #EA4335";
        endcardLengthField.style.background= '#FCE8E6';
        endcardMegBox.style.display = "block";
        endcardInputMessage.innerHTML = 'The length should be n integer & between  0 - 13 sec.';
        endcardInputCheck = false;
    } else {
        endcardMegBox.style.display = "none";
        endcardLengthField.style.background= '#E7EDF3';
        endcardLengthField.style.border = "none";
        endcardInputCheck = true;
    }
})

// Video & Audio Transition Panel
for (let q = 0; q < accordion.length; q++) {
    accordion[q].addEventListener("click", function(e) {
        for (let w = 0; w < accordion.length; w++) {
            if (w == q) {
                panel = this.nextElementSibling;
                this.classList.toggle("selected");
                panel.classList.toggle("close");
            } else {
                accordion[w].classList.remove("selected");
                accordion[w].nextElementSibling.classList.add("close");
            }
        }

    });
}

let publicStatus = false;
let currentOpenMenu = null;
let anyBoxOpen = false;

let statusSwitchs = document.getElementsByClassName('status-switch');
for (let statusSwitch of statusSwitchs) {
    statusSwitch.addEventListener('click', (e)=> {
        e.preventDefault();
        let publicColumn = statusSwitch.previousElementSibling;
        let publicColumnValue = publicColumn.getElementsByTagName('span');
        let dotsBox = statusSwitch.getElementsByClassName('status-option-box');
        let markPublic = statusSwitch.getElementsByClassName('public');
        let markPrivate = statusSwitch.getElementsByClassName('private');
        currentOpenMenu = e.target;
        console.log('currentOpenMenu', currentOpenMenu);

        if (publicStatus == false && anyBoxOpen !== true) {
            dotsBox[0].style.display = "block";
            publicStatus = true;
            anyBoxOpen = true;
            console.log('anyBoxOpen2: ', anyBoxOpen);
            jQuery(markPublic).on('click', function() {
                publicColumnValue[0].classList.add('icon-public');
                publicColumnValue[0].classList.remove('icon-private');
            });
            jQuery(markPrivate).on('click', function() {
                publicColumnValue[0].classList.remove('icon-public');
                publicColumnValue[0].classList.add('icon-private');
            });
        } else {
            dotsBox[0].style.display = "none";
            publicStatus = false;
            anyBoxOpen = false;
            console.log('anyBoxOpen3: ', anyBoxOpen);
        }
    });
}

let videoTransitions =
    document.getElementsByClassName('video-transition-option');
for (let videoTransition of videoTransitions) {
    videoTransition.addEventListener('click', (e) => {
        e.preventDefault();
        //NOTE: the 'textbox-0' id is not unique.
        let updateTitle = videoTransition.getElementsByTagName('h3');
        let updateTitleColor= $(updateTitle).css('color');
        videoTransitionTitle.innerHTML = updateTitle[0].innerHTML;
        videoTransitionTitle.style.color = updateTitleColor;
        this.handleTransition(
            videoTransition, videoTransitions, 'video-', 'textbox-0');
    });
}

let audioTransitions =
    document.getElementsByClassName('audio-transition-option');
for (let audioTransition of audioTransitions) {
    audioTransition.addEventListener('click', (e) => {
        e.preventDefault();
        let updateTitle = audioTransition.getElementsByTagName('h3');
        let updateTitleColor= $(updateTitle).css('color');
        audioTransitionTitle.innerHTML = updateTitle[0].innerHTML;
        audioTransitionTitle.style.color = updateTitleColor;
        this.handleTransition(
            audioTransition, audioTransitions, 'audio-', 'textbox-1');
    });
}

function handleTransition(transition, transitions, prefix, id) {
    for (let transitionToClear of transitions) {
        transitionToClear.classList.remove('active');
    }
    transition.classList.add('active');
    let selects = document.getElementsByTagName('select');
    let want = transition.id.replace(prefix, '').replace(/-/g, '');
    for (let sel of selects) {
        if (sel.id == id) {
            for (let index = 0; index < sel.options.length; index++) {
                let got = sel.options[index].value.toLowerCase().replace(/ /g, '');
                if (got == want) {
                    sel.selectedIndex = index;
                    break;
                }
            }
            break;
        }
    }
}

// for (let s = 0; s < audioTransitionOption.length; s++) {
// 	audioTransitionOption[s].addEventListener('click', function (e) {
// 		audioCurrentOption = audioTransitionOption[s];
// 		audioTransitionTitle.innerHTML = audioTransitionTitleArray[s];
// 		audioTransitionTitle.style.color = audioTransitionTitleColor[s];
// 		for (let y = 0; y < audioTransitionOption.length; y++ ) {
// 			if (audioTransitionOption[y].classList.contains('active')) {
// 				audioTransitionOption[y].classList.remove('active');
// 			}
// 		}
// 		this.classList.add('active');
// 		audioCurrentOptionText = audioCurrentOption.getElementsByTagName('h3')[0].innerHTML;
// 		// audioCurrentOptionText is the audio transition value for you pass it to the from validation
// 	});
// }

// Global show error & warning message function
function openMessageBox() {
    messageContainer.style.display = "block";
    messageBox.style.display = "block";
}

function closeMessageBox() {
    messageContainer.style.display = "none";
    messageBox.style.display = "none";
}

function showMessage(type, subject, detail, showYesNoBtn, yesCallBack, noCsllBack) {
    type = type.charAt(0).toUpperCase() + type.slice(1);
    messageType.innerHTML = type;
    banner.classList.add(type);
    iconType.classList.add(type);
    messageSubject.innerHTML = subject;
    messageDetail.innerHTML = detail;
    if (showYesNoBtn) {
        closeBtn.style.display = 'none';
        noBtn.style.display = 'block';
        yesBtn.style.display = 'block';
    } else {
        closeBtn.style.display = 'block';
        noBtn.style.display = 'none';
        yesBtn.style.display = 'none';
    }
    if (yesCallBack) {
        yesBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window[yesCallBack]();
            closeMessageBox();
        });
    }
    if (noCsllBack) {
        noBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window[noCsllBack]();
            closeMessageBox();
        });
    }
}


function yesFunctionName() {
    //you can rename this funcion
}

function noFunctionName() {
    //you can rename this funcion
}

closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    messageSubject.innerHTML = '';
    messageDetail.innerHTML = '';
    closeMessageBox();
});

// Form validation
runBtn.addEventListener('click', function(e){
    e.preventDefault();
    if ( idPathPassInputCheck == false || videoInputPassCheck == false || endcardInputCheck == false ) {
        showMessage(
            "Error",
            "Here is an error message.",
            "Url or ID should be longer than 11 characters. <br/> Video output length should be an integer & between  7 - 30 sec. <br/> End Card length should be an integer & between  0 - 13 sec.",

        );
        openMessageBox();
    }
});

idPath.addEventListener("focus", function() {
    this.classList.remove('id-focus');
});


const timeFormatTitle = document.getElementById('time-format-title');
const recreateVideoTitle = document.getElementById('recreate-video-title');

// Recreate Video & Time Format Toggle
let timeFormats =
    document.getElementsByClassName('time-format-option');
for (let timeFormat of timeFormats) {
    timeFormat.addEventListener('click', (e) => {
        e.preventDefault();
        timeFormatTitle.innerHTML = timeFormat.innerHTML;
        this.handleOptionSelect(timeFormat, timeFormats);
    });
}

let recreateVideos =
    document.getElementsByClassName('recreate-option');
for (let recreateVideo of recreateVideos) {
    recreateVideo.addEventListener('click', (e) => {
        e.preventDefault();
        recreateVideoTitle.innerHTML = recreateVideo.innerHTML;
        this.handleOptionSelect(recreateVideo, recreateVideos);
    });
}

function handleOptionSelect(item, items) {
    for (let item of items) {
        item.classList.remove('active');
    }
    item.classList.add('active');
}


// function enableSecFormat() {
// 	frameFormat.classList.remove('active');
// 	secFormat.classList.add('active');
// }
// function enableFrameFormat() {
// 	secFormat.classList.remove('active');
// 	frameFormat.classList.add('active');
// }
// function enableHiVideo() {
// 	hiVideo.classList.add('active');
// 	lowVideo.classList.remove('active');
// }
// function enableLowVideo() {
// 	hiVideo.classList.remove('active');
// 	lowVideo.classList.add('active');
// }
// timeToggle.addEventListener('change', function (e) {
// 	if (e.target.checked == true) {
// 		enableFrameFormat();
// 	} else {
// 		enableSecFormat();
// 	}
// });
// recreateToggle.addEventListener('change', function (e) {
// 	if (e.target.checked == true) {
// 		enableHiVideo();
// 	} else {
// 		enableLowVideo();
// 	}
// });
// secFormat.addEventListener('click', function (e) {
// 	timeToggle.checked = false;
// 	enableSecFormat();
// })
// frameFormat.addEventListener('click', function (e) {
// 	timeToggle.checked = true;
// 	enableFrameFormat();
// })

// hiVideo.addEventListener('click', function (e) {
// 	recreateToggle.checked = true;
// 	enableHiVideo();
// })
// lowVideo.addEventListener('click', function (e) {
// 	recreateToggle.checked = false;
// 	enableLowVideo();
// })

// video & Audio Track Lock
trackLock.addEventListener('click', function (e) {
    if (link.classList.contains('un-link') || lock.classList.contains('un-lock')) {
        link.classList.add('link');
        link.classList.remove('un-link');
        lock.classList.remove('un-lock');
        lock.classList.add('lock');
    } else {
        link.classList.add('un-link');
        link.classList.remove('link');
        lock.classList.remove('lock');
        lock.classList.add('un-lock');
    }
})

// apply transition
transitionsBox.addEventListener('change', function (e) {
    if (e.target.checked == true) {
        console.log('on');
    } else {
        console.log('off');
    }
});

libraryBtn.addEventListener('click', function(e) {
    e.preventDefault();
    libraryBox.style.display = 'block';
    messageContainer.style.display = "block";
    header.style.zIndex = '0';
});

iconClose.addEventListener('click', function(e) {
    e.preventDefault();
    libraryBox.style.display = 'none';
    messageContainer.style.display = "none";
    header.style.zIndex = '9999';
    if (currentOpenMenu != null) {
        console.log('2', currentOpenMenu);
        currentOpenMenu.click();
    }

});

messageContainer.addEventListener('click', function(e) {
    e.preventDefault();
    iconClose.click();
    settingCloseIcon.click();
});

settingBtn.addEventListener('click', function(e) {
    e.preventDefault();
    settingPanel.style.display = 'block';
    messageContainer.style.display = "block";
    header.style.zIndex = '0';
});
settingCloseIcon.addEventListener('click', function(e) {
    e.preventDefault();
    settingPanel.style.display = 'none';
    messageContainer.style.display = "none";
    header.style.zIndex = '9999';
});

const lighWhooshSoundEffect = document.getElementById('ligh-whoosh-sound-effect');
const darkThudSoundEffect = document.getElementById('ldark-thud-sound-effect');
const leadingRiserSoundEffect = document.getElementById('leading-riser-sound-effect');

lighWhooshSoundEffect.addEventListener('mouseover', function(e) {
    const lighWhooshSound = new Audio('sounds/Rake_Swing_Whoosh_Close.mp3');
    lighWhooshSound.play();
});

darkThudSoundEffect.addEventListener('mouseover', function(e) {
    const darkThudSoundEffect = new Audio('sounds/222517__qubodup__dramatic-hit.flac');
    darkThudSoundEffect.play();
});

leadingRiserSoundEffect.addEventListener('mouseover', function(e) {
    const leadingRiserSoundEffect = new Audio('sounds/464250__suburbanwizard__echo-chromatic-riser.wav');
    leadingRiserSoundEffect.play();
});
