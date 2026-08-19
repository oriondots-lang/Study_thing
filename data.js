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
    const types = ['mc_si', 'mc_mp']; // Added type Positioning for Elements Positioning and pne(3 input boxes) for Elements Protons, Elements Eletrons, Elements Netrons
    let question_type = types[Math.floor(Math.random() * types.length)];
    let question = document.getElementById(question_id[0]);
    question.value = question_type;
    if (question_type === 'mc_si') {
        const questions = ['What is the Property of', 'What is the Unit of', 'What is the Symbol of'];
        let propertys = [
            ['the Length', 'the Mass', 'the Time', 'the Temperature', 'the Electric current', 'the Amount of substance', 'the Luminous intensity'],
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
        let chosen_element = current_array[answer_index];
        let full_text = question_text + ' ' + chosen_element + '?'
        question.innerHTML = full_text;
        let minus_amt = 0;
        let correct_answer = Math.floor(Math.random() * (3 - minus_amt));


        let correct_answer_text = other_array[answer_index];
        const elements_to_show = document.getElementsByClassName('mc_conversion_button');
        remove(other_array, [other_array[answer_index]]);
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
        const questions = ['What is the Atomic Weight of', 'What Series is this in:', 'Is this Diotomic or Polyatomic:', 'What is the Standard State of', 'What is the Boiling Point of', 'What is the Melting Point of']; //  / 
        const elements = ['H(Hydrogen)', 'He(Helium)', 'Li(Lithium)', 'Be(Beryllium)', 'B(Boron)', 'C(Carbon)', 'N(Nitrogen)', 'O(Oxygen)', 'F(Fluorine)', 'Ne(Neon)', 'Na(Sodium)', 'Mg(Magnesium)', 'Al(Aluminum)', 'Si(Silicon)', 'P(Phosphorus)', 'S(Sulfur)', 'Cl(Chlorine)', 'Ar(Argon)', 'K(Potassium)', 'Ca(Calcium)', 'Sc(Scandium)', 'Ti(Titanium)', 'V(Vanadium)', 'Cr(Chromium)', 'Mn(Manganese)', 'Fe(Iron)', 'Co(Cobalt)', 'Ni(Nickel)', 'Cu(Copper)', 'Zn(Zinc)', 'Ga(Gallium)', 'Ge(Germanium)', 'As(Arsenic)', 'Se(Selenium)', 'Br(Bromine)', 'Kr(Krypton)', 'Rb(Rubidium)', 'Sr(Strontium)', 'Y(Yttrium)', 'Zr(Zirconium)', 'Nb(Niobium)', 'Mo(Molybdenum)', 'Tc(Technetium)', 'Ru(Ruthenium)', 'Rh(Rhodium)', 'Pd(Palladium)', 'Ag(Silver)', 'Cd(Cadmium)', 'In(Indium)', 'Sn(Tin)', 'Sb(Antimony)', 'Te(Tellurium)', 'I(Iodine)', 'Xe(Xenon)', 'Cs(Cesium)', 'Ba(Barium)'];
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
            ['1.0080', '4.0026', '6.94', '9.0122', '10.81', '12.011', '14.007', '15.999', '18.998', '20.180', '22.990', '24.305', '26.982', '28.085', '30.974', '32.06', '35.45', '39.95', '39.098', '40.078', '44.956', '47.867', '50.942', '51.996', '54.938', '55.845', '58.933', '58.693', '63.546', '65.38', '69.723', '72.630', '74.922', '78.971', '79.904', '83.798', '85.468', '87.62', '88.906', '91.224', '92.906', '95.95', '97', '101.07', '102.91', '106.42', '107.87', '112.41', '114.82', '118.71', '121.76', '127.60', '126.90', '131.29', '132.91', '137.33'],
            ['Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Metalloid', 'Nonmetal', 'Nonmetal', 'Nonmetal', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Representative Element', 'Metalloid', 'Nonmetal', 'Nonmetal', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Representative Element', 'Metalloid', 'Metalloid', 'Nonmetal', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Transition Metal', 'Representative Element', 'Representative Element', 'Metalloid', 'Metalloid', 'Nonmetal', 'Noble Gas', 'Alkali Metal', 'Alkaline Earth'],
            ['Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Diotomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Polyatomic', 'Diotomic', 'Polyatomic', 'Polyatomic', 'Polyatomic'],
            ['Gaseous', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Gaseous', 'Gaseous', 'Gaseous', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Gaseous', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid', 'Liquid', 'Gaseous', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid/Heavy Metal', 'Solid/Radioactive', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid/Heavy Metal', 'Solid', 'Solid', 'Gaseous', 'Solid', 'Solid'],
            ['-252.9°C', '-269°C', '1342°C', '2470°C', '4000°C', '3825°C', '-195.8°C', '-183°C', '-188.1°C', '-246.1°C', '882.9°C', '1090°C', '2519°C', '2900°C', '280.5°C', '444.72°C', '-34.04°C', '-185.8°C', '759°C', '1484°C', '2831°C', '3187°C', '3407°C', '2671°C', '2061°C', '2862°C', '2927°C', '2913°C', '2562°C', '907°C', '2204°C', '2820°C', '614°C', '685°C', '58.9°C', '-153.22°C', '688°C', '1382°C', '3345°C', '4409°C', '4744°C', '4629°C', '4265°C', '4150°C', '3695°C', '2963°C', '2162°C', '766.9°C', '2072°C', '2602°C', '1587°C', '987.9°C', '184.3°C', '-108°C', '671°C', '1870°C'],
            ['-259.1°C', '-272°C', '180.54°C', '1287°C', '2075°C', '3550°C', '-210.1°C', '-218°C', '-220°C', '-248.6°C', '97.72°C', '650°C', '660.32°C', '1414°C', '44.15°C', '115.21°C', '-101.5°C', '-189.4°C', '63.5°C', '842°C', '1531°C', '1668°C', '1910°C', '1907°C', '1246°C', '1538°C', '1495°C', '1455°C', '1085°C', '419.5°C', '29.76°C', '938.25°C', '816.9°C', '221°C', '-7.35°C', '-157.36°C', '39.31°C', '776.9°C', '1526°C', '1855°C', '2477°C', '2623°C', '2157°C', '2334°C', '1964°C', '1554°C', '961.7°C', '321.07°C', '156.6°C', '231.93°C', '630.63°C', '449.51°C', '113.7°C', '-111.8°C', '28.44°C', '730°C'],
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