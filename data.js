function show_page(to_hide, to_show) {
    for (let j = 0; j < to_hide.length; j++) {
        const elements_to_hide = document.getElementsByClassName(to_hide[j]);
        for (let i = 0; i < elements_to_hide.length; i++) {
            elements_to_hide[i].hidden = true;
        }
    }
    for (let j = 0; j < to_show.length; j++) {
        const elements_to_show = document.getElementsByClassName(to_show[j]);
        for (let i = 0; i < elements_to_show.length; i++) {
            elements_to_show[i].hidden = false;
        }
    }
}

function create_conversion_question(question_id, answers_id) {
    const elements_to_hide = document.getElementsByClassName('show_answer');
    for (let i = 0; i < elements_to_hide.length; i++) {
        elements_to_hide[i].hidden = true;
    }
    const elements_to_show = document.getElementsByClassName('mc_conversion_button');
    for (let i = 0; i < elements_to_show.length; i++) {
        elements_to_show[i].disabled = false;
        elements_to_show[i].hidden = false;
    }
    document.getElementById('correct_answer_text').hidden = true;
    document.getElementById('correct_answer').innerHTML = "";
    const types = ['mc'];
    let question_type = types[Math.floor(Math.random() * types.length)];
    let question = document.getElementById(question_id[0]);
    question.value = question_type;
    if (question_type === 'mc') {
        const questions = ['Ca<sup>2</sup>+', 'Where?', 'Who?', 'Why?', 'How?'];
        let question_text = questions[Math.floor(Math.random() * questions.length)];
        question.innerHTML = question_text;
        let correct_answer = Math.floor(Math.random() * 3);
        const answers = ['The Thing', 'The Place', 'The Person', 'The Reason', 'The Possiblity'];
        let correct_answer_text = answers[questions.indexOf(question_text)];
        answers.splice(questions.indexOf(question_text), 1);
        for (let j = 0; j < answers_id.length; j++) {
            let cur_answer = document.getElementById(answers_id[j]);
            if (correct_answer === j) {
                cur_answer.innerHTML = correct_answer_text;
                cur_answer.value = 'correct';
            } else {
                let index = Math.floor(Math.random() * answers.length)
                cur_answer.innerHTML = answers[index];
                cur_answer.value = 'incorrect';
                answers.splice(index, 1);
            }
        }
    }
}

function is_answer(element, button_to_hide) {
    const elements_to_show = document.getElementsByClassName('show_answer');
    for (let i = 0; i < elements_to_show.length; i++) {
        elements_to_show[i].hidden = false;
    }
    const elements_to_hide = document.getElementsByClassName(button_to_hide);
    let correct_element = 'wur';
    for (let i = 0; i < elements_to_hide.length; i++) {
        if (elements_to_hide[i].value === 'correct') {
            correct_element = elements_to_hide[i].textContent;
        }
        elements_to_hide[i].disabled = true;
    }
    const answer_state = document.getElementById('answer_state');
    if (element.value === 'correct') {
        answer_state.innerHTML = "Correct";
        answer_state.style.color = "rgb(60, 179, 113)";
    } else {
        answer_state.innerHTML = "Incorrect";
        answer_state.style.color = "rgb(255, 0, 0)";
        document.getElementById('correct_answer_text').hidden = false;
        document.getElementById('correct_answer').textContent = correct_element;
    }
}
function remove(arr, elements) {
    elements.forEach(function (e) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == e) { arr.splice(i, 1); }
        }
    });
}
// Questions to create Elements Positioning, Elements Protons, Elements Eletrons, Elements Netrons, Elements Atomic Weight, Elements Group, and Elements Type
function create_element_question(question_id, answers_id) {
    const elements_to_hide = document.getElementsByClassName('show_answer');
    for (let i = 0; i < elements_to_hide.length; i++) {
        elements_to_hide[i].hidden = true;
    }
    const elements_to_show = document.getElementsByClassName('mc_element_button');
    for (let i = 0; i < elements_to_show.length; i++) {
        elements_to_show[i].disabled = false;
        elements_to_show[i].hidden = false;
    }
    document.getElementById('correct_answer_text').hidden = true;
    document.getElementById('correct_answer').innerHTML = "";
    const types = ['mc']; // Added type Positioning for Elements Positioning and pne(3 input boxes) for Elements Protons, Elements Eletrons, Elements Netrons
    let question_type = types[Math.floor(Math.random() * types.length)];
    let question = document.getElementById(question_id[0]);
    question.value = question_type;
    if (question_type === 'mc') {
        const questions = ['What is the Atomic Weight of', 'What is this considered:', 'Is this Diotomic or Polyatomic:', 'What is the Standard State of',];
        const elements = ['H(Hydrogen)', 'He(Helium)', 'Li(Lithium)', 'Be(Beryllium)', 'B(Boron)', 'C(Carbon)', 'N(Nitrogen)', 'O(Oxygen)', 'F(Fluorine)', 'Ne(Neon)', 'Na(Sodium)', 'Mg(Magnesium)', 'Al(Aluminum)', 'Si(Silicon)', 'P(Phosphorus)', 'S(Sulfur)', 'Cl(Chlorine)', 'Ar(Argon)', 'K(Potassium)', 'Ca(Calcium)', 'Sc(Scandium)', 'Ti(Titanium)', 'V(Vanadium)', 'Cr(Chromium)', 'Mn(Manganese)', 'Fe(Iron)', 'Co(Cobalt)', 'Ni(Nickel)', 'Cu(Copper)', 'Zn(Zinc)', 'Ga(Gallium)', 'Ge(Germanium)', 'As(Arsenic)', 'Se(Selenium)', 'Br(Bromine)', 'Kr(Krypton)'];
        let chosen_element = elements[Math.floor(Math.random() * elements.length)];
        let question_text = questions[Math.floor(Math.random() * questions.length)];
        let full_text = question_text + ' ' + chosen_element + '?'
        question.innerHTML = full_text;
        let minus_amt = 0;
        if (questions.indexOf(question_text) === 2) {
            minus_amt = 2;
        }
        let correct_answer = Math.floor(Math.random() * (3 - minus_amt));
        let answers = [
            ['1.0080', '4.0026', '6.94', '9.0122', '10.81', '12.011', '14.007', '15.999', '18.998', '20.180', '22.990', '24.305', '26.982', '28.085', '30.974', '32.06', '35.45', '39.95', '39.098', '40.078', '44.956', '47.867', '50.942', '51.996', '54.938', '55.845', '58.933', '58.693', '63.546', '65.38', '69.723', '72.630', '74.922', '78.971', '79.904', '83.798'],
            ['Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Metalloid', 'Nonmetal', 'Nonmetal', 'Nonmetal', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Representative Element', 'Metalloid', 'Nonmetal', 'Nonmetal', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Representative Element', 'Metalloid', 'Metalloid', 'Nonmetal', 'Nonmetal', 'Noble Gas'],
            ['Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Diotomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Polyatomic'],
            ['Gaseous', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Gaseous', 'Gaseous', 'Gaseous', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Gaseous', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid', 'Liquid', 'Gaseous'],
        ];
        let current_array = answers[questions.indexOf(question_text)];
        let correct_answer_text = answers[questions.indexOf(question_text)][elements.indexOf(chosen_element)];
        const elements_to_show = document.getElementsByClassName('mc_element_button');
        for (let i = 0; i < elements_to_show.length; i++) {
            if (questions.indexOf(question_text) === 2 && i >= 2) {
                elements_to_show[i].hidden = true;
            } else {
                elements_to_show[i].hidden = false;
            }
        }
        remove(current_array, [current_array[elements.indexOf(chosen_element)]]);
        for (let j = 0; j < answers_id.length; j++) {
            let cur_answer = document.getElementById(answers_id[j]);
            if (correct_answer === j) {
                cur_answer.innerHTML = correct_answer_text;
                cur_answer.value = 'correct';
            } else {
                let index = Math.floor(Math.random() * current_array.length);
                cur_answer.innerHTML = current_array[index];
                cur_answer.value = 'incorrect';
                remove(current_array, [current_array[index]])
            }
        }
    }
}