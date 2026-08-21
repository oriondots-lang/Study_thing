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
    const types = ['mc_si', 'mc_mp'];
    let question_type = types[Math.floor(Math.random() * types.length)];
    let question = document.getElementById(question_id[0]);
    question.value = question_type;
    if (question_type === 'mc_si') {
        const questions = ['What is the Property of', 'What is the Unit of', 'What is the Symbol of'];
        let propertys = [
            ['Length', 'Mass', 'Time', 'Temperature', 'Electric current', 'Amount of substance', 'Luminous intensity'],
            ['a Meter', 'a Kilogram', 'a Second', 'a Kelvin', 'a Ampere', 'a Mole', 'a candela'],
            ['m', 'kg', 'S', 'K', 'A', 'mol', 'cd']
        ];
        let question_text = questions[Math.floor(Math.random() * questions.length)];
        let answers = [];
        for (let j = 0; j < propertys.length; j++) {
            if (j != questions.indexOf(question_text)) {
                answers[answers.length] = propertys[j];
            }
        }
        let answer_index = Math.floor(Math.random() * answers.length);
        let current_array = answers[answer_index];
        let other_array = propertys[questions.indexOf(question_text)]
        let other_index = Math.floor(Math.random() * current_array.length);
        let chosen_element = current_array[other_index];
        let full_text = question_text + ' ' + chosen_element + '?'
        question.innerHTML = full_text;
        let minus_amt = 0;
        let correct_answer = Math.floor(Math.random() * (3 - minus_amt));


        let correct_answer_text = other_array[other_index];
        const elements_to_show = document.getElementsByClassName('mc_conversion_button');
        remove(other_array, [other_array[other_index]]);
        for (let j = 0; j < answers_id.length; j++) {
            let cur_answer = document.getElementById(answers_id[j]);
            if (correct_answer === j) {
                cur_answer.innerHTML = correct_answer_text;
                cur_answer.value = 'correct';
            } else {
                let index = Math.floor(Math.random() * other_array.length);
                cur_answer.innerHTML = other_array[index];
                cur_answer.value = 'incorrect';
                remove(other_array, [other_array[index]])
            }
        }
    } else if (question_type === 'mc_mp') {
        const questions = ['What is the Meaning of', 'What is the Numerical Value ', 'What is an Example of'];
        const elements = ['T(terra)', 'G(giga)', 'M(mega)', 'k(kilo)', 'd(deci)', 'c(centi)', 'm(milli)', 'μ(micro)', 'n(nano)', 'p(pico)', 'f(femto)'];
        let chosen_element = elements[Math.floor(Math.random() * elements.length)];
        let question_text = questions[Math.floor(Math.random() * questions.length)];
        let full_text = question_text + ' ' + chosen_element + '?'
        question.innerHTML = full_text;
        let minus_amt = 0;
        let correct_answer = Math.floor(Math.random() * (3 - minus_amt));
        let answers = [
            ['10<sup>12</sup>', '10<sup>9</sup>', '10<sup>6</sup>', '10<sup>3</sup>', '10<sup>-1</sup>', '10<sup>-2</sup>', '10<sup>-3</sup>', '10<sup>-6</sup>', '10<sup>-9</sup>', '10<sup>-12</sup>', '10<sup>-15</sup>'],
            ['1,000,000,000,000', '1,000,000,000', '1,000,000', '1000', '0.1', '0.01', '0.001', '0.000001', '0.000000001', '0.000000000001', '0.000000000000001'],
            ['1 × 10<sup>12</sup> W', '1 × 10<sup>9</sup> bytes', '1 × 10<sup>6</sup> Hz', '1 × 10<sup>3</sup> g', '1 × 10<sup>-1</sup> L', '1 × 10<sup>-2</sup> m', '1 × 10<sup>-3</sup> g', '1 × 10<sup>-6</sup> L', '1 × 10<sup>-9</sup> g', '1 × 10<sup>-12</sup> m', '1 × 10<sup>-15</sup> s'],
        ];
        let current_array = answers[questions.indexOf(question_text)];
        let correct_answer_text = answers[questions.indexOf(question_text)][elements.indexOf(chosen_element)];
        const elements_to_show = document.getElementsByClassName('mc_conversion_button');
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
    }
    document.getElementById('correct_answer_text').hidden = false;
    document.getElementById('correct_answer').textContent = correct_element;
}
function is_submit_answer(element, button_to_hide) {
    const elements_to_show = document.getElementsByClassName('show_answer');
    for (let i = 0; i < elements_to_show.length; i++) {
        elements_to_show[i].hidden = false;
    }
    const elements_to_hide = document.getElementsByClassName(button_to_hide);
    const elements_data = document.getElementsByClassName(button_to_hide + '_data');
    let correct_elements = [];
    let is_correct = true;
    for (let i = 0; i < elements_data.length; i++) {
        correct_elements[correct_elements.length] = elements_data[i].value;
        for (let j = 0; j < elements_to_hide.length; j++) {
            let at_data = elements_to_hide[j].id + '_data'
            if (elements_to_hide[j].value != elements_data[i].value && at_data === elements_data[i].id) {
                is_correct = false;
            }
            elements_to_hide[j].disabled = true;
        }
        elements_data[i].disabled = true;
    }
    const answer_state = document.getElementById('answer_state');
    let proton_input = document.getElementById('proton_input');
    let neutron_input = document.getElementById('neutron_input');
    let electron_input = document.getElementById('eletron_input');
    if (is_correct === true) {
        answer_state.innerHTML = "Correct";
        answer_state.style.color = "rgb(60, 179, 113)";
    } else {
        answer_state.innerHTML = "Incorrect";
        answer_state.style.color = "rgb(255, 0, 0)";
    }
    document.getElementById('correct_answer_text').hidden = false;
    document.getElementById('correct_answer').textContent = 'Protons:' + correct_elements[0] + ', Neutrons:' + correct_elements[1] + ', Eletrons:' + correct_elements[2];
}
function remove(arr, elements) {
    elements.forEach(function (e) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == e) { arr.splice(i, 1); }
        }
    });
}
Number.prototype.round = function(decimals) {
    return Number((Math.round(this + "e" + decimals) + "e-" + decimals));
}
// Questions to create Elements Positioning
function create_element_question(question_id, answers_id) {
    const elements_to_hide = document.getElementsByClassName('show_answer');
    for (let i = 0; i < elements_to_hide.length; i++) {
        elements_to_hide[i].hidden = true;
    }
    document.getElementById('correct_answer_text').hidden = true;
    document.getElementById('correct_answer').innerHTML = "";
    const types = ['mc', 'pne']; // Added type Positioning for Elements Positioning and 'name'
    let question_type = types[Math.floor(Math.random() * types.length)];
    let question = document.getElementById(question_id[0]);
    question.value = question_type;
    const elements_prefix = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar(Argon)', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba'];
    const elements = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium'];
    if (question_type === 'mc') {
        const elements_to_show_ = document.getElementsByClassName('mc_element_button');
        for (let i = 0; i < elements_to_show_.length; i++) {
            elements_to_show_[i].disabled = false;
            elements_to_show_[i].hidden = false;
        }
        const elements_to_hide = document.getElementsByClassName('element_input');
        for (let i = 0; i < elements_to_hide.length; i++) {
            elements_to_hide[i].hidden = true;
        }
        const questions = ['What is the Atomic Weight of', 'What Series is this in:', 'Is this Diotomic or Polyatomic:', 'What is the Standard State of', 'What is the Boiling Point of', 'What is the Melting Point of']; //  / 
        let chosen_element = elements[Math.floor(Math.random() * elements.length)];
        let chosen_element_prefix = elements_prefix[elements.indexOf(chosen_element)];
        let question_text = questions[Math.floor(Math.random() * questions.length)];
        let full_text = question_text + ' ' + chosen_element_prefix + '(' + chosen_element + ')?'
        question.innerHTML = full_text;
        let minus_amt = 0;
        if (questions.indexOf(question_text) === 2) {
            minus_amt = 2;
        }
        let correct_answer = Math.floor(Math.random() * (3 - minus_amt));
        let answers = [
            ['1.0080', '4.0026', '6.94', '9.0122', '10.81', '12.011', '14.007', '15.999', '18.998', '20.180', '22.990', '24.305', '26.982', '28.085', '30.974', '32.06', '35.45', '39.95', '39.098', '40.078', '44.956', '47.867', '50.942', '51.996', '54.938', '55.845', '58.933', '58.693', '63.546', '65.38', '69.723', '72.630', '74.922', '78.971', '79.904', '83.798', '85.468', '87.62', '88.906', '91.224', '92.906', '95.95', '97', '101.07', '102.91', '106.42', '107.87', '112.41', '114.82', '118.71', '121.76', '127.60', '126.90', '131.29', '132.91', '137.33'],
            ['Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Metalloid', 'Nonmetal', 'Nonmetal', 'Nonmetal', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Representative Element', 'Metalloid', 'Nonmetal', 'Nonmetal', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Representative Element', 'Metalloid', 'Metalloid', 'Nonmetal', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Representative Element', 'Representative Element', 'Metalloid', 'Metalloid', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth'],
            ['Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Diotomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic'],
            ['Gaseous', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Gaseous', 'Gaseous', 'Gaseous', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Gaseous', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid', 'Liquid', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid/Radioactive', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid', 'Solid', 'Gaseous', 'Solid', 'Solid'],
            ['-252.9', '-269', '1342', '2470', '4000', '3825', '-195.8', '-183', '-188.1', '-246.1', '882.9', '1090', '2519', '2900', '280.5', '444.72', '-34.04', '-185.8', '759', '1484', '2831', '3187', '3407', '2671', '2061', '2862', '2927', '2913', '2562', '907', '2204', '2820', '614', '685', '58.9', '-153.22', '688', '1382', '3345', '4409', '4744', '4629', '4265', '4150', '3695', '2963', '2162', '766.9', '2072', '2602', '1587', '987.9', '184.3', '-108', '671', '1870'],
            ['-259.1', '-272', '180.54', '1287', '2075', '3550', '-210.1', '-218', '-220', '-248.6', '97.72', '650', '660.32', '1414', '44.15', '115.21', '-101.5', '-189.4', '63.5', '842', '1531', '1668', '1910', '1907', '1246', '1538', '1495', '1455', '1085', '419.5', '29.76', '938.25', '816.9', '221', '-7.35', '-157.36', '39.31', '776.9', '1526', '1855', '2477', '2623', '2157', '2334', '1964', '1554', '961.7', '321.07', '156.6', '231.93', '630.63', '449.51', '113.7', '-111.8', '28.44', '730'],
        ];
        let degree = ['°C', '°F', 'K'];
        let degree_index = Math.floor(Math.random() * degree.length);
        let degree_text = degree[degree_index];
        let current_array = answers[questions.indexOf(question_text)];
        let correct_answer_text = answers[questions.indexOf(question_text)][elements.indexOf(chosen_element)];
        if (questions.indexOf(question_text) === 4 || questions.indexOf(question_text) === 5) {
            let amt = Number(answers[questions.indexOf(question_text)][elements.indexOf(chosen_element)])
            if (degree_index === 1) {
                amt = (1.8 * amt) + 32;
            } else if (degree_index === 2) {
                amt = amt + 273.15;
            }
            amt = amt.round(2).toFixed(2)
            correct_answer_text = amt.toString() + degree_text;
        }
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
                let new_answer_text = current_array[index];
                if (questions.indexOf(question_text) === 4 || questions.indexOf(question_text) === 5) {
                    let amt = Number(new_answer_text)
                    if (degree_index === 1) {
                        amt = (1.8 * amt) + 32;
                    } else if (degree_index === 2) {
                        amt = amt + 273.15;
                    }
                    amt = amt.toFixed(2)
                    new_answer_text = amt.toString() + degree_text;
                }
                cur_answer.innerHTML = new_answer_text;
                cur_answer.value = 'incorrect';
                remove(current_array, [current_array[index]])
            }
        }
    } else if (question_type === 'pne') {
        const elements_to_hide = document.getElementsByClassName('mc_element_button');
        for (let i = 0; i < elements_to_hide.length; i++) {
            elements_to_hide[i].hidden = true;
        }
        const elements_to_show = document.getElementsByClassName('element_input');
        for (let i = 0; i < elements_to_show.length; i++) {
            elements_to_show[i].disabled = false;
            elements_to_show[i].hidden = false;
        }
        const question_text = 'How many p<sup>+</sup>, n<sup>0</sup>, and e<sup>-</sup> does';
        const post_question_text = ' contain?';
        let chosen_element = elements[Math.floor(Math.random() * elements.length)];
        let chosen_element_prefix = elements_prefix[elements.indexOf(chosen_element)];
        let full_text = question_text + ' ' + chosen_element_prefix + post_question_text;
        question.innerHTML = full_text;
        let elem_display = document.getElementById('element_text');
        elem_display.innerHTML = chosen_element;
        let answers = [
            // Proton, Neutron, Electron
            [1, 0, 1], [2, 2, 2], [3, 3, 3], [4, 5, 4], [5, 6, 5], [6, 6, 6], [7, 7, 7], [8, 8, 8], [9, 10, 9], [10, 10, 10], [11, 12, 11], [12, 12, 12], [13, 14, 13], [14, 14, 14], [15, 16, 15], [16, 16, 16], [17, 18, 17], [18, 22, 18], [19, 20, 19], [20, 20, 20], [21, 24, 21], [22, 26, 22], [23, 27, 23], [24, 28, 24], [25, 30, 25], [26, 30, 26], [27, 32, 27], [28, 31, 28], [29, 35, 29], [30, 35, 30], [31, 39, 31], [32, 41, 32], [33, 43, 33], [34, 45, 34], [35, 45, 35], [36, 48, 36], [37, 48, 37], [38, 50, 38], [39, 50, 39], [40, 51, 40], [41, 52, 41], [42, 54, 42], [43, 55, 43], [44, 57, 44], [45, 58, 45], [46, 60, 46], [47, 61, 47], [48, 64, 48], [49, 66, 49], [50, 69, 50], [51, 71, 51], [52, 76, 52], [53, 74, 53], [54, 77, 54], [55, 78, 55], [56, 81, 56],
        ];
        let proton_input = document.getElementById('proton_input_data');
        let neutron_input = document.getElementById('neutron_input_data');
        let electron_input = document.getElementById('eletron_input_data');
        let answer = answers[elements.indexOf(chosen_element)];
        proton_input.value = answer[0];
        neutron_input.value = answer[1];
        electron_input.value = answer[2];
    } //else if (question_type === 'name') {
    //
    //}
}

function create_review_question(question_id, answers_id) {
    const elements_to_hide = document.getElementsByClassName('show_answer');
    for (let i = 0; i < elements_to_hide.length; i++) {
        elements_to_hide[i].hidden = true;
    }
    const elements_to_show = document.getElementsByClassName('mc_review_button');
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
        const questions = ['For a hypothesis to be considered a valid scientific theory, it must', 'Which of the following illustrates the law of multiple proportions?', 'Do a large sample and a small sample (quantity) of a given compound contain the same number of each type of atom? Why?', 'A pure substance', 'A molecule', 'An element', 'Which of the following is an intensive property of chlorine?', 'Which statement is true regarding ammonia, NH<sub>3</sub>?', 'Which of the following is a chemical property of formaldehyde (CH<sub>2</sub>O)?', 'When copper metal is dropped into nitric acid, a blue solution containing copper (II) ions is produced along with brown nitrogen monoxide gas. Which of the following is an example of a chemical property? '];
        const elements = ['', '', '', '', ''];
        let chosen_element = elements[Math.floor(Math.random() * elements.length)];
        let question_text = questions[Math.floor(Math.random() * questions.length)];
        let full_text = question_text + '' + chosen_element
        question.innerHTML = full_text;
        let minus_amt = 0;
        let correct_answer = Math.floor(Math.random() * (4 - minus_amt));
        let answers = [
            ['explain widely observed phenomena based on extensive testing.', 'summarize experimental data without trying to predict future results.', 'be impossible to prove wrong by experiment.', 'never be modified or expanded.', 'be voted on by the scientific community and accepted by all.'],
            ['The mass ratio of O to N in NO<sub>2</sub> is twice that in NO.', 'NO<sub>2</sub> always contains one nitrogen atom and two oxygen atoms.', 'The mass of NO<sub>2</sub> is a small whole-number multiple of the mass of NO.', 'NO and NO<sub>2</sub> have similar chemical and physical properties.', 'NO always contains one nitrogen and one oxygen atom.'],
            ['No, because a compound has atoms in identical proportions, not atoms in identical numbers.', 'No, because a large sample and a small sample of a compound have different chemical formulas.', 'Yes, all samples of a given compound are identical', 'No, the constituent elements of one sample of a compound are different than in another sample of a compound', 'Yes, the numbers of each type of atom in a given compound do not vary.']
            ['cannot be separated into simpler substances by physical means.', 'must be composed of atoms of the same type.', 'has different chemical properties depending on its source.', 'must be a compound.', 'must be a single element'],
            ['can be an element or a compound.', 'cannot form a solid.', 'must be a single element', 'cannot be broken into its constituent atoms by any means.', 'must contain at least two types of atoms.'],
            ['Its decomposition produces three volumes of hydrogen for every one volume of nitrogen.', 'can be separated into its components by physical methods.', 'has different chemical properties depending on its state.', 'exists only as atoms, not as molecules.', 'has different chemical properties depending on its source'],
            ['Chlorine boils at -34°C.', 'The pressure exerted on a container of chlorine gas at a given temperature', 'Chlorine gas, when inhaled in large amounts, is toxic to humans.', 'The amount of energy released when chlorine reacts with oxygen', 'A typical swimming pool can be sanitized with 10 mL of liquid chlorine'],
            ['Its decomposition produces three volumes of hydrogen for every one volume of nitrogen.', 'It can also be correctly represented as N<sub>2</sub>H<sub>6</sub>.', 'It cannot be decomposed into simpler substances by any means.', 'It can be separated into nitrogen and hydrogen atoms using distillation.', 'It can be separated into nitrogen and hydrogen atoms using filtration'],
            ['It is flammable.', 'It has a density of 1.09 g/mL.', 'It is colorless.', 'It dissolves in water.', 'It is a gas at room temperature'],
            ['the generation of new compounds when nitric acid comes into contact with copper metal', 'nitrogen monoxide’s irritating odor', 'the blue color of aqueous copper (II) ions', 'the viscosity of nitric acid at room temperature', "copper's red - orange appearance"],
        ];
        let current_array = answers[questions.indexOf(question_text)];
        let correct_answer_text = answers[questions.indexOf(question_text)][0];
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