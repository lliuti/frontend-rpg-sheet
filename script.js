const btn = document.getElementById('btn');
const btnIncrese = document.getElementById('btnIncreaseHealth');
const btnDecrease = document.getElementById('btnDecreaseHealth');
const health = document.getElementById('cHealth');

loadStorage();

function loadStorage() {
    //
    health.textContent = 0;
}

function increaseNumber() {
    const hp = parseInt(health.innerHTML);
    health.textContent = hp + 1;
    storage(hp);
}

function decreaseNumber() { 
    const hp = parseInt(health.innerHTML);
    if (hp < -5) {
        return false;
    }
    health.textContent = hp - 1;
    console.log(hp);
    storage(hp);
}
    
function storage(hp) {
    // console.log(hp);
    //
}

btn.addEventListener('click', async function() {
    const passInput = document.getElementById('pass');
    const pass = {
        password: passInput.value
    };

    if (pass.password == '' || pass.password == undefined) {
        document.getElementById('warning').style.display = 'block';
        return false;
    }

    const api = await axios.create({ 
        // baseURL: 'http://localhost:3333'
        baseURL: 'https://backend-rpg-sheet.herokuapp.com'
    });

    const response = await api.post('/sendpassword', pass);
    console.log(response);

    if (response.status !== 200) {
        document.getElementById('warning').style.display = 'block';
        return false;
    }

    const { 
        name, 
        job, 
        age, 
        eyes, 
        hair, 
        height, 
        weight,
        strength,
        stamina,
        dexterity,
        speed,
        int,
        perception,
        charisma,
        guile,
        driving,
        search,
        reading,
        sneak,
        stealing,
        listening
    } = response.data;

    document.getElementById('cName').textContent = name;
    document.getElementById('cJob').textContent = job;
    document.getElementById('cAge').textContent = age;
    document.getElementById('cHeight').textContent = height;
    document.getElementById('cWeight').textContent = weight;
    document.getElementById('cHair').textContent = hair;
    document.getElementById('cEyes').textContent = eyes;
    //
    document.getElementById('cStrength').textContent = strength;
    document.getElementById('cStamina').textContent = stamina;
    document.getElementById('cDexterity').textContent = dexterity;
    document.getElementById('cSpeed').textContent = speed;
    //
    document.getElementById('cInt').textContent = int;
    document.getElementById('cPerception').textContent = perception;
    document.getElementById('cCharisma').textContent = charisma;
    document.getElementById('cGuile').textContent = guile;
    //
    document.getElementById('cDriving').textContent = driving;
    document.getElementById('cSearch').textContent = search;
    document.getElementById('cReading').textContent = reading;
    document.getElementById('cSneak').textContent = sneak;
    document.getElementById('cStealing').textContent = stealing;
    document.getElementById('cListening').textContent = listening;

    if (name == 'Prado Inagawa') {
        document.getElementById('img1').style.display = 'block';
        document.getElementById('cJob').style.color = '#e75850';
    } else if (name == 'Isabel Domingues') {
        document.getElementById('img2').style.display = 'block';
        document.getElementById('cJob').style.color = '#5051cf';
    } else if (name == 'Lucas Trado') {
        document.getElementById('img3').style.display = 'block';
        document.getElementById('cJob').style.color = '#96edb3';
    } else if (name == 'Alice Waldorf') {
        document.getElementById('img4').style.display = 'block';
        document.getElementById('cJob').style.color = '#d7b166';
    } else {
        return false;
    }

    document.getElementById('password-wrapper').style.display = "none";
    document.getElementById('sheet-wrapper').style.display = "flex";
});

btnIncreaseHealth.addEventListener('click', async function() {
    increaseNumber(); 
});

btnDecrease.addEventListener('click', async function() {
    decreaseNumber();
});