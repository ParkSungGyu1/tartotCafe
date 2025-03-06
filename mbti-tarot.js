const tarotData = {
    "ISTJ": { title: "THE HIEROPHANT", img: "https://mblogthumb-phinf.pstatic.net/20110624_59/itowa2_1308843978681xEpar_JPEG/05.jpg?type=w2", desc: "조언과 충고가 오고가는 하루입니다." },
    "ISFJ": { title: "THE EMPRESS", img: "https://mblogthumb-phinf.pstatic.net/20110624_1/itowa2_1308843978329IOsMc_JPEG/03.jpg?type=w2", desc: "풍족함과 따뜻한 에너지가 가득한 하루입니다." },
    "INFJ": { title: "THE HIGH PRIESTESS", img: "https://mblogthumb-phinf.pstatic.net/20110624_142/itowa2_1308843978159dzsgb_JPEG/02.jpg?type=w2", desc: "깊은 고민과 통찰이 필요한 하루입니다." },
    "INTJ": { title: "THE MAGICIAN", img: "https://mblogthumb-phinf.pstatic.net/20110624_62/itowa2_1308843977966VT7VU_JPEG/01.jpg?type=w2", desc: "마법처럼 원하는 것을 이룰 수 있는 날입니다." },
    "ISTP": { title: "THE CHARIOT", img: "https://mblogthumb-phinf.pstatic.net/20110624_121/itowa2_1308843979005KbK8A_JPEG/07.jpg?type=w2", desc: "빠른 결단과 행동이 필요한 하루입니다." },
    "ISFP": { title: "THE LOVERS", img: "https://mblogthumb-phinf.pstatic.net/20110624_166/itowa2_13088439788514BBLJ_JPEG/06.jpg?type=w2", desc: "사랑과 조화를 중요시하는 하루입니다." },
    "INFP": { title: "THE MOON", img: "https://mblogthumb-phinf.pstatic.net/20110624_156/itowa2_1308843981440TCaVN_JPEG/18.jpg?type=w2", desc: "감정 기복이 있을 수 있지만 차분함이 필요합니다." },
    "INTP": { title: "THE HERMIT", img: "https://mblogthumb-phinf.pstatic.net/20110624_291/itowa2_1308843979360KHl7R_JPEG/09.jpg?type=w2", desc: "혼자만의 시간이 중요한 날입니다." },
    "ESTP": { title: "THE FOOL", img: "https://mblogthumb-phinf.pstatic.net/20110624_229/itowa2_1308843977777Mlz97_JPEG/00.jpg?type=w2", desc: "모험과 도전이 좋은 결과를 가져올 것입니다." },
    "ESFP": { title: "THE SUN", img: "https://mblogthumb-phinf.pstatic.net/20110624_289/itowa2_1308843981616xa4Iz_JPEG/19.jpg?type=w2", desc: "밝고 긍정적인 에너지가 가득한 하루입니다." },
    "ENFP": { title: "WHEEL OF FORTUNE", img: "https://mblogthumb-phinf.pstatic.net/20110624_291/itowa2_1308843979776wHzA7_JPEG/10.jpg?type=w2", desc: "새로운 변화와 기회가 찾아올 수 있습니다." },
    "ENTP": { title: "THE TOWER", img: "https://mblogthumb-phinf.pstatic.net/20110624_292/itowa2_1308843981039dqLcv_JPEG/16.jpg?type=w2", desc: "예상치 못한 변화에 대비해야 합니다." },
    "ESTJ": { title: "JUSTICE", img: "https://mblogthumb-phinf.pstatic.net/20110624_161/itowa2_1308843980010oyRV5_JPEG/11.jpg?type=w2", desc: "균형과 공정함이 중요한 하루입니다." },
    "ESFJ": { title: "THE STAR", img: "https://mblogthumb-phinf.pstatic.net/20110624_34/itowa2_1308843981215K57FM_JPEG/17.jpg?type=w2", desc: "희망과 긍정적인 만남이 있는 하루입니다." },
    "ENFJ": { title: "TEMPERANCE", img: "https://mblogthumb-phinf.pstatic.net/20110624_214/itowa2_1308843980666SwXYY_JPEG/14.jpg?type=w2", desc: "조화와 균형을 유지하는 것이 중요합니다." },
    "ENTJ": { title: "THE EMPEROR", img: "https://mblogthumb-phinf.pstatic.net/20110624_112/itowa2_1308843978493Sb0h7_JPEG/04.jpg?type=w2", desc: "리더십을 발휘할 수 있는 하루입니다." }
};

document.querySelectorAll(".mbti-card").forEach(card => {
    card.addEventListener("click", function () {
        const mbtiType = this.getAttribute("data-mbti");
        const tarot = tarotData[mbtiType];
        
        if (tarot) {
            document.getElementById("tarot-image").src = tarot.img;
            document.getElementById("tarot-title").textContent = tarot.title;
            document.getElementById("tarot-description").textContent = tarot.desc;
            document.querySelector("h2").textContent = "MBTI - 타로 결과";
            
            document.querySelector(".mbti-container").style.display = "none";
            const resultContainer = document.getElementById("tarot-result");
            resultContainer.style.display = "flex";
            setTimeout(() => {
                resultContainer.style.opacity = "1";
                resultContainer.style.transform = "scale(1)";
            }, 50);
        }
    });
});

document.querySelector(".retry-button").addEventListener("click", function () {
    document.querySelector("h2").textContent = "본인의 MBTI를 선택해 주세요!";
});
