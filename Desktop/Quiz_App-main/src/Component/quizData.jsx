const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Madrid"],
      correctAnswer: "Paris",
      Level: "Easy",
      Topic: "General Knowledge"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
      Level: "Easy",
      Topic: "Space"
    },
    {
      question: "Who is the Prime Minister of India?",
      options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"],
      correctAnswer: "Narendra Modi",
      Level: "Easy",
      Topic: "India"
    },
    {
      question: "What does CPU stand for in computer science?",
      options: ["Central Processing Unit", "Computer Personal Unit", "Central Process Unit", "Computer Processor Unit"],
      correctAnswer: "Central Processing Unit",
      Level: "Easy",
      Topic: "Computer Science"
    },
    {
      question: "Which gas do plants use for photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
      Level: "Medium",
      Topic: "General Knowledge"
    },
    {
      question: "Who was the first President of the United States?",
      options: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
      correctAnswer: "George Washington",
      Level: "Medium",
      Topic: "History"
    },
    {
      question: "Which Indian state is known as the 'Land of Five Rivers'?",
      options: ["Punjab", "Haryana", "Rajasthan", "Gujarat"],
      correctAnswer: "Punjab",
      Level: "Medium",
      Topic: "India"
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        options: ["Punjab", "Haryana", "Rajasthan", "Gujarat"],
        correctAnswer: "Punjab",
        Level: "Medium",
        Topic: "India"
      },
      {
        question: "What is the capital city of Maharashtra, India?",
        options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
        correctAnswer: "Mumbai",
        Level: "Medium",
        Topic: "India"
      },
      {
        question: "The historic 'Taj Mahal' is located in which Indian city?",
        options: ["Agra", "Jaipur", "Varanasi", "Lucknow"],
        correctAnswer: "Agra",
        Level: "Medium",
        Topic: "India"
      },
      {
        question: "Which Indian state is famous for its backwaters and houseboat cruises?",
        options: ["Kerala", "Goa", "Tamil Nadu", "Andhra Pradesh"],
        correctAnswer: "Kerala",
        Level: "Medium",
        Topic: "India"
      },
      {
        question: "In which year did India gain independence from British rule?",
        options: ["1942", "1947", "1950", "1965"],
        correctAnswer: "1947",
        Level: "Medium",
        Topic: "History"
      },
      {
        question: "Who was the first Prime Minister of India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
        correctAnswer: "Jawaharlal Nehru",
        Level: "Medium",
        Topic: "History"
      },
      {
        question: "The Indian state of Rajasthan is famous for which architectural marvel?",
        options: ["Qutub Minar", "Hawa Mahal", "Gateway of India", "Lotus Temple"],
        correctAnswer: "Hawa Mahal",
        Level: "Medium",
        Topic: "India"
      },
      {
        question: "Which city is often referred to as the 'Pink City' of India?",
        options: ["Jaipur", "Kolkata", "Mumbai", "Chennai"],
        correctAnswer: "Jaipur",
        Level: "Medium",
        Topic: "India"
      },
      {
        question: "The historic 'Chhatrapati Shivaji Terminus' is located in which Indian city?",
        options: ["Mumbai", "Kolkata", "Chennai", "Delhi"],
        correctAnswer: "Mumbai",
        Level: "Medium",
        Topic: "India"
      },
      {
        question: "The Maurya Empire was established by which Indian emperor?",
        options: ["Ashoka", "Chandragupta Maurya", "Akbar", "Harsha"],
        correctAnswer: "Chandragupta Maurya",
        Level: "Medium",
        Topic: "History"
      },
      {
        question: "Chandrayaan-1 was India's first lunar probe, launched in which year?",
        options: ["2005", "2008", "2011", "2014"],
        correctAnswer: "2008",
        Level: "Medium",
        Topic: "Space"
      },
      {
        question: "What is the name of the lunar crater where Chandrayaan-2's Vikram lander attempted a soft landing?",
        options: ["Armstrong Crater", "Copernicus Crater", "Chandrasekhar Crater", "Lunar South Pole"],
        correctAnswer: "Lunar South Pole",
        Level: "Medium",
        Topic: "Space"
      },
      {
        question: "Which space agency collaborated with ISRO on the Chandrayaan-2 mission?",
        options: ["NASA", "European Space Agency (ESA)", "Russian Federal Space Agency (Roscosmos)", "Japan Aerospace Exploration Agency (JAXA)"],
        correctAnswer: "NASA",
        Level: "Medium",
        Topic: "Space"
      },
      {
        question: "What was the main scientific objective of Chandrayaan-1 mission?",
        options: ["Study the atmosphere of the Moon", "Search for signs of water on the Moon", "Explore the geology of Mars", "Study the solar wind"],
        correctAnswer: "Search for signs of water on the Moon",
        Level: "Medium",
        Topic: "Space"
      },
      {
        question: "Which rover was planned to be part of the Chandrayaan-2 mission, but was not deployed due to the Vikram lander's hard landing?",
        options: ["Pragyan", "Curiosity", "Yutu", "Sojourner"],
        correctAnswer: "Pragyan",
        Level: "Medium",
        Topic: "Space"
      },
      {
        question: "Chandrayaan-3 is a planned lunar mission by India. What is its main objective?",
        options: ["Lunar orbiting and remote sensing", "Human landing on the Moon", "Sample return from the Moon", "Search for extraterrestrial life"],
        correctAnswer: "Lunar orbiting and remote sensing",
        Level: "Medium",
        Topic: "Space"
      },
      {
        question: "Chandrayaan-2's orbiter carries eight scientific instruments. What is the primary focus of these instruments?",
        options: ["Studying the Moon's magnetosphere", "Mapping the lunar surface in high resolution", "Searching for signs of ancient life", "Testing communication technology"],
        correctAnswer: "Mapping the lunar surface in high resolution",
        Level: "Medium",
        Topic: "Space"
      },
      {
        question: "Chandrayaan-2 was launched atop which rocket?",
        options: ["PSLV-C37", "GSLV Mk III-M1", "PSLV-C39", "GSLV Mk II-F08"],
        correctAnswer: "GSLV Mk III-M1",
        Level: "Medium",
        Topic: "Space"
      },
      {
        question: "Which branch of the Indian Armed Forces is responsible for air operations?",
        options: ["Indian Army", "Indian Navy", "Indian Air Force", "Indian Coast Guard"],
        correctAnswer: "Indian Air Force",
        Level: "Medium",
        Topic: "Indian Forces"
      },
      {
        question: "The 'Siachen Glacier' is located in which region and is known for its military significance?",
        options: ["Jammu and Kashmir", "Arunachal Pradesh", "Sikkim", "Himachal Pradesh"],
        correctAnswer: "Jammu and Kashmir",
        Level: "Medium",
        Topic: "Indian Forces"
      },
      {
        question: "Which operation was conducted by the Indian Army to evict Pakistani infiltrators from the Kargil sector in 1999?",
        options: ["Operation Desert Storm", "Operation Meghdoot", "Operation Blue Star", "Operation Vijay"],
        correctAnswer: "Operation Vijay",
        Level: "Medium",
        Topic: "Indian Forces"
      },
      {
        question: "Who is the current Chief of the Indian Army (as of 2021)?",
        options: ["General Bipin Rawat", "Admiral Karambir Singh", "Air Chief Marshal Rakesh Kumar Singh Bhadauria", "General Manoj Mukund Naravane"],
        correctAnswer: "General Manoj Mukund Naravane",
        Level: "Medium",
        Topic: "Indian Forces"
      },
      {
        question: "Which Indian naval base is the largest in Asia and home to the Eastern Naval Command of the Indian Navy?",
        options: ["INS Viraat Naval Base", "INS Chakra Naval Base", "INS Vikramaditya Naval Base", "INS Karwar Naval Base"],
        correctAnswer: "INS Karwar Naval Base",
        Level: "Medium",
        Topic: "Indian Forces"
      },
      {
        question: "Which paramilitary force of India is responsible for border security and internal security?",
        options: ["Central Reserve Police Force (CRPF)", "Border Security Force (BSF)", "Indo-Tibetan Border Police (ITBP)", "National Security Guard (NSG)"],
        correctAnswer: "Border Security Force (BSF)",
        Level: "Medium",
        Topic: "Indian Forces"
      },
      {
        question: "Which Indian woman officer became the first woman to be appointed as a flight commander of a flying unit in the Indian Air Force?",
        options: ["Padmavathy Bandopadhyay", "Gunjan Saxena", "Bhawana Kanth", "Avani Chaturvedi"],
        correctAnswer: "Avani Chaturvedi",
        Level: "Medium",
        Topic: "Indian Forces"
      },
      {
        question: "Which military decoration is the highest peacetime gallantry award in India?",
        options: ["Param Vir Chakra", "Ashoka Chakra", "Vir Chakra", "Shaurya Chakra"],
        correctAnswer: "Ashoka Chakra",
        Level: "Medium",
        Topic: "Indian Forces"
      },
      {
        question: "Who is considered the preserver of the universe in Hindu mythology?",
        options: ["Brahma", "Vishnu", "Shiva", "Durga"],
        correctAnswer: "Vishnu",
        Level: "Medium",
        Topic: "Indian Gods and Mythology"
      },
      {
        question: "Ganesha is known as the god of...",
        options: ["War", "Wisdom", "Prosperity", "Love"],
        correctAnswer: "Wisdom",
        Level: "Medium",
        Topic: "Indian Gods and Mythology"
      },
      {
        question: "Which goddess is often depicted with multiple arms, symbolizing her various powers?",
        options: ["Lakshmi", "Saraswati", "Parvati", "Durga"],
        correctAnswer: "Durga",
        Level: "Medium",
        Topic: "Indian Gods and Mythology"
      },
      {
        question: "Who is the destroyer of evil and the god of transformation and destruction in Hinduism?",
        options: ["Brahma", "Vishnu", "Shiva", "Krishna"],
        correctAnswer: "Shiva",
        Level: "Medium",
        Topic: "Indian Gods and Mythology"
      },
      {
        question: "The great Indian epic, the 'Mahabharata,' is attributed to the sage...",
        options: ["Vyasa", "Valmiki", "Tulsidas", "Ramanuja"],
        correctAnswer: "Vyasa",
        Level: "Medium",
        Topic: "Indian Gods and Mythology"
      },
      {
        question: "Who is the divine cowherd and flute-player, known for his youthful antics and love for Radha?",
        options: ["Rama", "Krishna", "Hanuman", "Indra"],
        correctAnswer: "Krishna",
        Level: "Medium",
        Topic: "Indian Gods and Mythology"
      },
      {
        question: "Which demon king is known for his ten heads and was defeated by Lord Rama?",
        options: ["Ravana", "Hiranyakashipu", "Mahishasura", "Vibhishana"],
        correctAnswer: "Ravana",
        Level: "Medium",
        Topic: "Indian Gods and Mythology"
      },
      {
        question: "Which river is considered sacred in Hinduism and is often referred to as the 'Ganga'?",
        options: ["Yamuna", "Godavari", "Saraswati", "Ganges"],
        correctAnswer: "Ganges",
        Level: "Medium",
        Topic: "Indian Gods and Mythology"
      },
      {
        question: "The Ramayana is an ancient Indian epic that narrates the life and adventures of...",
        options: ["Krishna", "Hanuman", "Rama", "Shiva"],
        correctAnswer: "Rama",
        Level: "Medium",
        Topic: "Indian Gods and Mythology"
      },
      {
        question: "Who is often referred to as the 'Missile Man of India'?",
        options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Indira Gandhi", "APJ Abdul Kalam"],
        correctAnswer: "APJ Abdul Kalam",
        Level: "Medium",
        Topic: "Famous People of India"
      },
      {
        question: "Which Indian leader is known for his role in the Indian National Army (INA) and his efforts in India's struggle for independence?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Netaji Subhas Chandra Bose", "Sardar Patel"],
        correctAnswer: "Netaji Subhas Chandra Bose",
        Level: "Medium",
        Topic: "Famous People of India"
      },
      {
        question: "Who was the first woman Prime Minister of India?",
        options: ["Indira Gandhi", "Sarojini Naidu", "Kiran Bedi", "Pratibha Patil"],
        correctAnswer: "Indira Gandhi",
        Level: "Medium",
        Topic: "Famous People of India"
      },
      {
        question: "Which Indian cricketer is known as the 'Master Blaster' and holds numerous records in international cricket?",
        options: ["Sourav Ganguly", "Rahul Dravid", "Sachin Tendulkar", "Virender Sehwag"],
        correctAnswer: "Sachin Tendulkar",
        Level: "Medium",
        Topic: "Famous People of India"
      },
      {
        question: "Who is known as the 'Nightingle of India' for her melodious singing and contributions to Indian classical music?",
        options: ["Lata Mangeshkar", "Asha Bhosle", "Geeta Dutt", "M.S. Subbulakshmi"],
        correctAnswer: "Lata Mangeshkar",
        Level: "Medium",
        Topic: "Famous People of India"
      },
      {
        question: "Which Indian film director is often referred to as the 'Father of Indian Cinema'?",
        options: ["Satyajit Ray", "Raj Kapoor", "Guru Dutt", "Dadasaheb Phalke"],
        correctAnswer: "Dadasaheb Phalke",
        Level: "Medium",
        Topic: "Famous People of India"
      },
      {
        question: "Who is the renowned Indian classical dancer, choreographer, and recipient of the Bharat Ratna award?",
        options: ["Mallika Sarabhai", "Shovana Narayan", "Birju Maharaj", "Rukmini Devi Arundale"],
        correctAnswer: "Birju Maharaj",
        Level: "Medium",
        Topic: "Famous People of India"
      },
      {
        question: "Which Indian scientist and mathematician made significant contributions to number theory and is known for the 'Ramanujan-Hardy' formula?",
        options: ["C.V. Raman", "Homi Bhabha", "Srinivasa Ramanujan", "A.P.J. Abdul Kalam"],
        correctAnswer: "Srinivasa Ramanujan",
        Level: "Medium",
        Topic: "Famous People of India"
      },
      {
        question: "When was the Indian Constitution adopted?",
        options: ["15 August 1947", "26 January 1950", "2 October 1949", "1 May 1951"],
        correctAnswer: "26 January 1950",
        Level: "Medium",
        Topic: "Indian Constitution"
      },
      {
        question: "Who is known as the 'Father of the Indian Constitution'?",
        options: ["Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
        correctAnswer: "B.R. Ambedkar",
        Level: "Medium",
        Topic: "Indian Constitution"
      },
      {
        question: "How many Fundamental Rights are guaranteed by the Indian Constitution?",
        options: ["5", "7", "10", "14"],
        correctAnswer: "6",
        Level: "Medium",
        Topic: "Indian Constitution"
      },
      {
        question: "Which part of the Indian Constitution deals with Directive Principles of State Policy?",
        options: ["Part II", "Part III", "Part IV", "Part V"],
        correctAnswer: "Part IV",
        Level: "Medium",
        Topic: "Indian Constitution"
      },
      {
        question: "Which article of the Indian Constitution deals with the Right to Freedom of Religion?",
        options: ["Article 14", "Article 19", "Article 21", "Article 25"],
        correctAnswer: "Article 25",
        Level: "Medium",
        Topic: "Indian Constitution"
      },
      {
        question: "Who is the final interpreter of the Indian Constitution?",
        options: ["President of India", "Prime Minister of India", "Parliament of India", "Supreme Court of India"],
        correctAnswer: "Supreme Court of India",
        Level: "Medium",
        Topic: "Indian Constitution"
      },
      {
        question: "Which amendment to the Indian Constitution lowered the voting age from 21 to 18 years?",
        options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        correctAnswer: "61st Amendment",
        Level: "Medium",
        Topic: "Indian Constitution"
      },
      {
        question: "What is the term of the President of India?",
        options: ["5 years", "4 years", "6 years", "7 years"],
        correctAnswer: "5 years",
        Level: "Medium",
        Topic: "Indian Constitution"
      },
      {
        question: "How many schedules does the Indian Constitution have?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12",
        Level: "Medium",
        Topic: "Indian Constitution"
      },
      {
        question: "Which sport is the 'National Game of India'?",
        options: ["Hockey", "Cricket", "Football", "Kabaddi"],
        correctAnswer: "Hockey",
        Level: "Medium",
        Topic: "Indian Sports"
      },
      {
        question: "Who is the first and only Indian badminton player to win an Olympic gold medal?",
        options: ["Saina Nehwal", "P. V. Sindhu", "Prakash Padukone", "Pullela Gopichand"],
        correctAnswer: "P. V. Sindhu",
        Level: "Medium",
        Topic: "Indian Sports"
      },
      {
        question: "Which Indian cricketer is known as the 'God of Cricket'?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Rahul Dravid", "Kapil Dev"],
        correctAnswer: "Sachin Tendulkar",
        Level: "Medium",
        Topic: "Indian Sports"
      },
      {
        question: "In which year did India win its first Cricket World Cup?",
        options: ["1983", "1996", "2007", "2011"],
        correctAnswer: "1983",
        Level: "Medium",
        Topic: "Indian Sports"
      },
      {
        question: "Which Indian athlete won the country's first individual Olympic gold medal in 2008?",
        options: ["Saina Nehwal", "Mary Kom", "P. V. Sindhu", "Abhinav Bindra"],
        correctAnswer: "Abhinav Bindra",
        Level: "Medium",
        Topic: "Indian Sports"
      },
      {
        question: "Who is the first Indian woman to win an Olympic medal (bronze) in boxing?",
        options: ["P. V. Sindhu", "Sakshi Malik", "Mary Kom", "Saina Nehwal"],
        correctAnswer: "Mary Kom",
        Level: "Medium",
        Topic: "Indian Sports"
      },
      {
        question: "Which Indian cricketer holds the record for the highest individual score in Test cricket?",
        options: ["Rahul Dravid", "Virat Kohli", "Virender Sehwag", "Sachin Tendulkar"],
        correctAnswer: "Virender Sehwag",
        Level: "Medium",
        Topic: "Indian Sports"
      },
      {
        question: "Who was the first Indian woman to win a Paralympic gold medal?",
        options: ["Deepa Malik", "Bhavina Patel", "P. V. Sindhu", "Devendra Jhajharia"],
        correctAnswer: "Deepa Malik",
        Level: "Medium",
        Topic: "Indian Sports"
      },
      {
        question: "What is the chemical symbol for the element oxygen?",
        options: ["O", "Oi", "Ox", "Om"],
        correctAnswer: "O",
        Level: "Easy",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which gas do plants use for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
        Level: "Easy",
        Topic: "Science and Chemistry"
      },
      {
        question: "Water is made up of which two elements?",
        options: ["Oxygen and Nitrogen", "Hydrogen and Carbon", "Oxygen and Hydrogen", "Carbon and Nitrogen"],
        correctAnswer: "Oxygen and Hydrogen",
        Level: "Easy",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the process of converting a solid into a liquid called?",
        options: ["Evaporation", "Sublimation", "Melting", "Condensation"],
        correctAnswer: "Melting",
        Level: "Easy",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
        Level: "Easy",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the smallest unit of matter?",
        options: ["Atom", "Molecule", "Cell", "Nucleus"],
        correctAnswer: "Atom",
        Level: "Easy",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which gas do humans breathe in?",
        options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
        correctAnswer: "Oxygen",
        Level: "Easy",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the chemical symbol for the element gold?",
        options: ["Au", "Go", "Gl", "Gd"],
        correctAnswer: "Au",
        Level: "Easy",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which process involves a solid changing directly into a gas without becoming a liquid first?",
        options: ["Sublimation", "Melting", "Condensation", "Evaporation"],
        correctAnswer: "Sublimation",
        Level: "Easy",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the process by which plants convert light energy into chemical energy?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
        correctAnswer: "Photosynthesis",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "The atomic number of an element is determined by the number of...",
        options: ["Protons", "Neutrons", "Electrons", "Nucleons"],
        correctAnswer: "Protons",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the phenomenon where light is separated into its component colors by a prism called?",
        options: ["Diffraction", "Polarization", "Dispersion", "Refraction"],
        correctAnswer: "Dispersion",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the chemical formula for water?",
        options: ["HO2", "H2O", "O2H", "OH2"],
        correctAnswer: "H2O",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which subatomic particle has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Nucleus"],
        correctAnswer: "Electron",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which gas is known as the 'Laughing Gas'?",
        options: ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Methane"],
        correctAnswer: "Nitrous Oxide",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the chemical formula for table salt?",
        options: ["NaO2", "NaOH", "H2O", "NaCl"],
        correctAnswer: "NaCl",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which law states that the total pressure of a gas mixture is the sum of the pressures of each individual gas in the mixture?",
        options: ["Boyle's Law", "Charles's Law", "Dalton's Law", "Gay-Lussac's Law"],
        correctAnswer: "Dalton's Law",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the SI unit of electric current?",
        options: ["Ohm", "Volt", "Ampere", "Watt"],
        correctAnswer: "Ampere",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Fluorine", "Iron", "Ferrum", "Francium"],
        correctAnswer: "Iron",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the name for the study of the composition, structure, properties, and changes of matter?",
        options: ["Biology", "Physics", "Chemistry", "Geology"],
        correctAnswer: "Chemistry",
        Level: "Medium",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the process by which a nucleus releases energy by breaking down into smaller fragments?",
        options: ["Nuclear Fission", "Nuclear Fusion", "Radioactive Decay", "Electromagnetic Radiation"],
        correctAnswer: "Nuclear Fission",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which fundamental particle is exchanged between protons and neutrons to hold the nucleus together?",
        options: ["Electron", "Photon", "Graviton", "Pion"],
        correctAnswer: "Pion",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the term for the study of the distribution, movement, and properties of the oceans and their components?",
        options: ["Oceanography", "Meteorology", "Seismology", "Volcanology"],
        correctAnswer: "Oceanography",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which law states that the pressure of a gas is inversely proportional to its volume at a constant temperature?",
        options: ["Boyle's Law", "Charles's Law", "Dalton's Law", "Gay-Lussac's Law"],
        correctAnswer: "Boyle's Law",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which acid is present in citrus fruits and is responsible for their sour taste?",
        options: ["Acetic Acid", "Hydrochloric Acid", "Citric Acid", "Sulfuric Acid"],
        correctAnswer: "Citric Acid",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the unit of measurement for radioactivity?",
        options: ["Ohm", "Curie", "Becquerel", "Gray"],
        correctAnswer: "Becquerel",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which rare noble gas is used in lasers and lights to produce a distinctive green color?",
        options: ["Neon", "Xenon", "Krypton", "Argon"],
        correctAnswer: "Argon",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which chemical process involves the addition of hydrogen to unsaturated compounds?",
        options: ["Oxidation", "Reduction", "Hydrogenation", "Esterification"],
        correctAnswer: "Hydrogenation",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "What is the term for a chemical reaction that absorbs heat from its surroundings?",
        options: ["Endothermic", "Exothermic", "Catalytic", "Spontaneous"],
        correctAnswer: "Endothermic",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which compound is responsible for the characteristic smell of garlic?",
        options: ["Allicin", "Cinnamaldehyde", "Eugenol", "Capsaicin"],
        correctAnswer: "Allicin",
        Level: "Hard",
        Topic: "Science and Chemistry"
      },
      {
        question: "Which continent is known as the 'Land of the Rising Sun'?",
        options: ["Africa", "Asia", "Europe", "Australia"],
        correctAnswer: "Asia",
        Level: "Medium",
        Topic: "Geography"
      },
      {
        question: "Which mountain range is located in South America and is known for its diverse ecosystems?",
        options: ["Rocky Mountains", "Andes", "Himalayas", "Alps"],
        correctAnswer: "Andes",
        Level: "Medium",
        Topic: "Geography"
      },
      {
        question: "Which river is the longest in the world?",
        options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
        correctAnswer: "Nile",
        Level: "Medium",
        Topic: "Geography"
      },
      {
        question: "The Great Barrier Reef is located off the coast of which country?",
        options: ["Australia", "Brazil", "Mexico", "India"],
        correctAnswer: "Australia",
        Level: "Medium",
        Topic: "Geography"
      },
      {
        question: "Which desert is the largest hot desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
        correctAnswer: "Sahara Desert",
        Level: "Medium",
        Topic: "Geography"
      },
      {
        question: "Which strait separates Asia and North America?",
        options: ["Strait of Gibraltar", "Strait of Hormuz", "Bering Strait", "Strait of Malacca"],
        correctAnswer: "Bering Strait",
        Level: "Medium",
        Topic: "Geography"
      },
      {
        question: "Which ocean is the largest and covers approximately one-third of the Earth's surface?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
        Level: "Medium",
        Topic: "Geography"
      },
      {
        question: "Mount Everest, the highest peak in the world, is part of which mountain range?",
        options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
        correctAnswer: "Himalayas",
        Level: "Medium",
        Topic: "Geography"
      },
      {
        question: "Which canal connects the Mediterranean Sea to the Red Sea?",
        options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Erie Canal"],
        correctAnswer: "Suez Canal",
        Level: "Medium",
        Topic: "Geography"
      },
      {
        question: "Which layer of the Earth's atmosphere is closest to the planet's surface?",
        options: ["Exosphere", "Mesosphere", "Troposphere", "Stratosphere"],
        correctAnswer: "Troposphere",
        Level: "Medium",
        Topic: "Layers of the Atmosphere"
      },
      {
        question: "In which atmospheric layer does weather phenomena occur, including clouds, rain, and storms?",
        options: ["Exosphere", "Mesosphere", "Troposphere", "Stratosphere"],
        correctAnswer: "Troposphere",
        Level: "Medium",
        Topic: "Layers of the Atmosphere"
      },
      {
        question: "Which layer of the atmosphere contains the ozone layer that absorbs most of the Sun's harmful ultraviolet radiation?",
        options: ["Exosphere", "Mesosphere", "Troposphere", "Stratosphere"],
        correctAnswer: "Stratosphere",
        Level: "Medium",
        Topic: "Layers of the Atmosphere"
      },
      {
        question: "Which layer is located directly above the stratosphere and is known for its extremely low air density?",
        options: ["Exosphere", "Thermosphere", "Troposphere", "Mesosphere"],
        correctAnswer: "Mesosphere",
        Level: "Medium",
        Topic: "Layers of the Atmosphere"
      },
      {
        question: "The outermost layer of the Earth's atmosphere, where gases transition into space, is called the...",
        options: ["Exosphere", "Mesosphere", "Troposphere", "Stratosphere"],
        correctAnswer: "Exosphere",
        Level: "Medium",
        Topic: "Layers of the Atmosphere"
      },
      {
        question: "In which atmospheric layer do you find the International Space Station (ISS) orbiting the Earth?",
        options: ["Exosphere", "Mesosphere", "Troposphere", "Stratosphere"],
        correctAnswer: "Exosphere",
        Level: "Medium",
        Topic: "Layers of the Atmosphere"
      },
      {
        question: "Which atmospheric layer is known for the phenomenon of the Northern Lights (Aurora Borealis) and Southern Lights (Aurora Australis)?",
        options: ["Exosphere", "Ionosphere", "Troposphere", "Stratosphere"],
        correctAnswer: "Ionosphere",
        Level: "Medium",
        Topic: "Layers of the Atmosphere"
      },
      {
        question: "The layer above the ionosphere, where gas particles become ionized due to high energy from the Sun, is called the...",
        options: ["Exosphere", "Thermosphere", "Mesosphere", "Stratosphere"],
        correctAnswer: "Thermosphere",
        Level: "Medium",
        Topic: "Layers of the Atmosphere"
      },
      {
        question: "Who was the first Emperor of the Maurya Empire in ancient India?",
        options: ["Chandragupta Maurya", "Ashoka the Great", "Samudragupta", "Bindusara"],
        correctAnswer: "Chandragupta Maurya",
        Level: "Medium",
        Topic: "Indian History"
      },
      {
        question: "The Indus Valley Civilization was primarily located in which present-day country?",
        options: ["India", "Pakistan", "Bangladesh", "Nepal"],
        correctAnswer: "Pakistan",
        Level: "Medium",
        Topic: "Indian History"
      },
      {
        question: "Who was the Mughal Emperor during whose reign the Taj Mahal was built?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correctAnswer: "Shah Jahan",
        Level: "Medium",
        Topic: "Indian History"
      },
      {
        question: "The Quit India Movement was launched against British rule in India in which year?",
        options: ["1919", "1929", "1942", "1947"],
        correctAnswer: "1942",
        Level: "Medium",
        Topic: "Indian History"
      },
      {
        question: "Who was the first woman President of the Indian National Congress and a prominent freedom fighter?",
        options: ["Sarojini Naidu", "Indira Gandhi", "Kasturba Gandhi", "Annie Besant"],
        correctAnswer: "Annie Besant",
        Level: "Medium",
        Topic: "Indian History"
      },
      {
        question: "The Battle of Plassey, a significant event in Indian history, took place in which year?",
        options: ["1757", "1857", "1942", "1858"],
        correctAnswer: "1757",
        Level: "Medium",
        Topic: "Indian History"
      },
      {
        question: "Who led the Dandi March, also known as the Salt March, as a protest against British salt taxes?",
        options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel", "Mahatma Gandhi"],
        correctAnswer: "Mahatma Gandhi",
        Level: "Medium",
        Topic: "Indian History"
      },
      {
        question: "The Indian National Army (INA) was formed by Subhas Chandra Bose during which period?",
        options: ["World War I", "World War II", "Post-Independence Era", "Colonial Era"],
        correctAnswer: "World War II",
        Level: "Medium",
        Topic: "Indian History"
      },
      {
        question: "Who was the ruler of the Mauryan Empire known for his conversion to Buddhism and his role in spreading the religion?",
        options: ["Chandragupta Maurya", "Bindusara", "Ashoka the Great", "Samudragupta"],
        correctAnswer: "Ashoka the Great",
        Level: "Medium",
        Topic: "Ancient Indian History"
      },
      {
        question: "Which ancient Indian king is famous for his association with the rock-cut architecture at Ellora and Badami?",
        options: ["Harsha", "Chandragupta II", "Raja Raja Chola", "Pulakeshin II"],
        correctAnswer: "Pulakeshin II",
        Level: "Medium",
        Topic: "Ancient Indian History"
      },
      {
        question: "Who was the founder of the Gupta Empire, often referred to as the 'Napoleon of India'?",
        options: ["Samudragupta", "Chandragupta Maurya", "Skandagupta", "Chandragupta I"],
        correctAnswer: "Chandragupta I",
        Level: "Medium",
        Topic: "Ancient Indian History"
      },
      {
        question: "The great ancient Indian king who established the 'Vijaynagara Empire' was:",
        options: ["Krishna Deva Raya", "Ashoka", "Harsha", "Chandragupta Maurya"],
        correctAnswer: "Krishna Deva Raya",
        Level: "Medium",
        Topic: "Ancient Indian History"
      },
      {
        question: "Which ancient Indian ruler is known for his famous edicts, often inscribed on pillars?",
        options: ["Raja Raja Chola", "Chandragupta Maurya", "Ashoka the Great", "Samudragupta"],
        correctAnswer: "Ashoka the Great",
        Level: "Medium",
        Topic: "Ancient Indian History"
      },
      {
        question: "The famous university 'Nalanda' was established during the reign of which ancient Indian king?",
        options: ["Harsha", "Chandragupta II", "Kanishka", "Samudragupta"],
        correctAnswer: "Kanishka",
        Level: "Medium",
        Topic: "Ancient Indian History"
      },
      {
        question: "The 'Battle of Hydaspes' took place between Alexander the Great and which Indian king?",
        options: ["Chandragupta Maurya", "Ashoka the Great", "Porus", "Chandragupta II"],
        correctAnswer: "Porus",
        Level: "Medium",
        Topic: "Ancient Indian History"
      },
      {
        question: "Which ancient Indian ruler was also known by the name 'Devanampiya Piyadasi'?",
        options: ["Harsha", "Chandragupta Maurya", "Ashoka the Great", "Raja Raja Chola"],
        correctAnswer: "Ashoka the Great",
        Level: "Medium",
        Topic: "Ancient Indian History"
      },
      {
        question: "The 'Sepoy Mutiny' of 1857, which is often regarded as the first war of Indian independence, began in which city?",
        options: ["Delhi", "Mumbai", "Kolkata", "Lucknow"],
        correctAnswer: "Delhi",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Jallianwala Bagh massacre, a tragic incident during the Indian freedom struggle, occurred in which city?",
        options: ["Amritsar", "Mumbai", "Kolkata", "Lahore"],
        correctAnswer: "Amritsar",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Non-Cooperation Movement was launched by Mahatma Gandhi in response to which incident?",
        options: ["Jallianwala Bagh massacre", "Partition of Bengal", "Rowlatt Act", "Chauri Chaura incident"],
        correctAnswer: "Jallianwala Bagh massacre",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Quit India Movement, also known as the August Kranti, was launched during which year of India's struggle for independence?",
        options: ["1919", "1929", "1942", "1947"],
        correctAnswer: "1942",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Salt March, a significant event in India's fight against British rule, was led by Mahatma Gandhi in which year?",
        options: ["1919", "1929", "1930", "1942"],
        correctAnswer: "1930",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Battle of Plassey, a pivotal moment in Indian history, took place during which year?",
        options: ["1757", "1857", "1942", "1858"],
        correctAnswer: "1757",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Salt Satyagraha, also known as the Dandi March, was a direct-action protest against British salt taxes led by Gandhi. It began in which coastal town?",
        options: ["Mumbai", "Ahmedabad", "Chennai", "Navsari"],
        correctAnswer: "Ahmedabad",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Champaran Satyagraha, Gandhi's first significant protest in India, was against the oppressive treatment of...",
        options: ["Farmers", "Mineworkers", "Textile workers", "Indigo farmers"],
        correctAnswer: "Indigo farmers",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Indian National Army (INA), led by Subhas Chandra Bose, sought to liberate India from British rule with the help of which Axis power during World War II?",
        options: ["Germany", "Japan", "Italy", "Russia"],
        correctAnswer: "Japan",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Rani of Jhansi, a prominent figure in the Indian Rebellion of 1857, is famously associated with which fort?",
        options: ["Red Fort", "Agra Fort", "Gwalior Fort", "Chittorgarh Fort"],
        correctAnswer: "Gwalior Fort",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Simon Commission, appointed by the British government, faced strong opposition in India due to the absence of which representation?",
        options: ["Hindus", "Muslims", "Sikhs", "Indians"],
        correctAnswer: "Indians",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Khilafat Movement, a protest against the treatment of the Ottoman Caliphate, was led by which two prominent Indian leaders?",
        options: ["Gandhi and Nehru", "Bose and Patel", "Ambedkar and Tagore", "Gandhi and Ali"],
        correctAnswer: "Gandhi and Ali",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Bardoli Satyagraha, a successful peasants' movement, was led by which Indian political leader?",
        options: ["Sardar Patel", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bal Gangadhar Tilak"],
        correctAnswer: "Sardar Patel",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Tebhaga Movement of the 1940s was a struggle by farmers for what?",
        options: ["Water rights", "Land rights", "Labor rights", "Trade rights"],
        correctAnswer: "Land rights",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Moplah Rebellion of 1921, a peasant and tenant uprising, primarily took place in which Indian state?",
        options: ["Kerala", "Bihar", "Punjab", "Uttar Pradesh"],
        correctAnswer: "Kerala",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Tribal Uprising of 1832, also known as the 'Hul' rebellion, took place in which present-day Indian state?",
        options: ["Chhattisgarh", "Jharkhand", "Odisha", "Madhya Pradesh"],
        correctAnswer: "Jharkhand",
        Level: "Medium",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Chauri Chaura incident in 1922 led Mahatma Gandhi to suspend which movement?",
        options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Khilafat Movement"],
        correctAnswer: "Non-Cooperation Movement",
        Level: "Hard",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The 'Bhagat Singh' incident is related to which historic event in the Indian freedom struggle?",
        options: ["Jallianwala Bagh massacre", "Chauri Chaura incident", "Kakori train robbery", "Martyrdom of Bhagat Singh"],
        correctAnswer: "Martyrdom of Bhagat Singh",
        Level: "Hard",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Swadeshi Movement, aimed at boycotting British goods, was launched in response to which colonial policy?",
        options: ["Partition of Bengal", "Rowlatt Act", "Doctrine of Lapse", "Simon Commission"],
        correctAnswer: "Partition of Bengal",
        Level: "Hard",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The All India Kisan Sabha (AIKS) played a significant role in which Indian state's peasant movement of the 1940s?",
        options: ["Uttar Pradesh", "Bihar", "Andhra Pradesh", "Punjab"],
        correctAnswer: "Uttar Pradesh",
        Level: "Hard",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Home Rule Movement in India was launched by which two prominent Indian leaders?",
        options: ["Bhagat Singh and Subhas Chandra Bose", "Annie Besant and Bal Gangadhar Tilak", "Sarojini Naidu and Lala Lajpat Rai", "Jawaharlal Nehru and Sardar Patel"],
        correctAnswer: "Annie Besant and Bal Gangadhar Tilak",
        Level: "Hard",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Rampa Rebellion, also known as the 'Telangana Rebellion,' was an armed peasant uprising in which Indian state?",
        options: ["Andhra Pradesh", "Tamil Nadu", "Kerala", "Maharashtra"],
        correctAnswer: "Andhra Pradesh",
        Level: "Hard",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Santhal Rebellion of 1855-1856, a significant tribal uprising, primarily took place in which region of India?",
        options: ["Jharkhand", "Assam", "Nagaland", "Manipur"],
        correctAnswer: "Jharkhand",
        Level: "Hard",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "The Pabna Peasant Uprising of 1873 took place in which present-day country?",
        options: ["India", "Bangladesh", "Pakistan", "Nepal"],
        correctAnswer: "Bangladesh",
        Level: "Hard",
        Topic: "Indian Wars and Movements"
      },
      {
        question: "Which city is often referred to as the 'Pink City' due to its iconic pink-colored buildings?",
        options: ["Mumbai", "Jaipur", "Delhi", "Kolkata"],
        correctAnswer: "Jaipur",
        Level: "Medium",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "What is the popular nickname for Mumbai, which also reflects its vibrant nightlife and entertainment industry?",
        options: ["City of Dreams", "Garden City", "Pink City", "Silicon Valley of India"],
        correctAnswer: "City of Dreams",
        Level: "Medium",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "Which city is known as the 'City of Joy' and was the setting for the novel of the same name by Dominique Lapierre?",
        options: ["Kolkata", "Chennai", "Bangalore", "Hyderabad"],
        correctAnswer: "Kolkata",
        Level: "Medium",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "The historic monument 'India Gate' is located in which Indian city?",
        options: ["Delhi", "Agra", "Mumbai", "Chennai"],
        correctAnswer: "Delhi",
        Level: "Medium",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "Which city is famous for its picturesque Dal Lake, houseboats, and Mughal gardens?",
        options: ["Srinagar", "Shimla", "Manali", "Amritsar"],
        correctAnswer: "Srinagar",
        Level: "Medium",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "The iconic 'Gateway of India' monument is situated in which Indian city?",
        options: ["Mumbai", "Kolkata", "Chennai", "Bangalore"],
        correctAnswer: "Mumbai",
        Level: "Medium",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "Which city is known as the 'City of Lakes' due to its numerous picturesque lakes?",
        options: ["Udaipur", "Bhopal", "Pune", "Lucknow"],
        correctAnswer: "Udaipur",
        Level: "Medium",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "The famous 'Golden Temple,' a revered Sikh pilgrimage site, is located in which city?",
        options: ["Amritsar", "Varanasi", "Haridwar", "Patna"],
        correctAnswer: "Amritsar",
        Level: "Medium",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "Which city is known as the 'Manchester of India' due to its prominent role in the textile industry?",
        options: ["Mumbai", "Ahmedabad", "Kanpur", "Coimbatore"],
        correctAnswer: "Ahmedabad",
        Level: "Hard",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "The ancient city of Hampi, a UNESCO World Heritage Site, is located in which Indian state?",
        options: ["Karnataka", "Madhya Pradesh", "Rajasthan", "Tamil Nadu"],
        correctAnswer: "Karnataka",
        Level: "Hard",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "Which city, often called the 'Queen of the Arabian Sea,' is known for its historical fort, Chinese fishing nets, and spice markets?",
        options: ["Kochi", "Goa", "Pondicherry", "Kolkata"],
        correctAnswer: "Kochi",
        Level: "Hard",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "The iconic Ajanta and Ellora Caves, UNESCO World Heritage Sites, are located in which Indian state?",
        options: ["Maharashtra", "Uttar Pradesh", "Gujarat", "Odisha"],
        correctAnswer: "Maharashtra",
        Level: "Hard",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "The historical site of Mahabalipuram, known for its intricate rock-cut monuments, is situated in which Indian state?",
        options: ["Tamil Nadu", "Andhra Pradesh", "Kerala", "Karnataka"],
        correctAnswer: "Tamil Nadu",
        Level: "Hard",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "Which city, often referred to as the 'City of Palaces,' is known for its majestic Mysore Palace and Dasara festival?",
        options: ["Jaipur", "Mysore", "Hyderabad", "Lucknow"],
        correctAnswer: "Mysore",
        Level: "Hard",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "The historical site of Konark Sun Temple, dedicated to the Hindu god Surya, is located in which Indian state?",
        options: ["Odisha", "Uttar Pradesh", "West Bengal", "Bihar"],
        correctAnswer: "Odisha",
        Level: "Hard",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "Which city is known for its ancient step wells, intricate havelis, and vibrant local culture in the Indian state of Rajasthan?",
        options: ["Jodhpur", "Bikaner", "Jaisalmer", "Pushkar"],
        correctAnswer: "Jaisalmer",
        Level: "Hard",
        Topic: "Famous Cities and Places in India"
      },
      {
        question: "Who is the current Prime Minister of India?",
        options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"],
        correctAnswer: "Narendra Modi",
        Level: "Easy",
        Topic: "Indian Politics"
      },
      {
        question: "What is the capital city of India?",
        options: ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
        correctAnswer: "New Delhi",
        Level: "Easy",
        Topic: "Indian Politics"
      },
      {
        question: "Who is the President of India as of 2021?",
        options: ["Ram Nath Kovind", "Pranab Mukherjee", "Sonia Gandhi", "Amit Shah"],
        correctAnswer: "Ram Nath Kovind",
        Level: "Easy",
        Topic: "Indian Politics"
      },
      {
        question: "Which political party is commonly associated with the symbol 'Lotus'?",
        options: ["Indian National Congress", "Bahujan Samaj Party", "Bharatiya Janata Party", "Aam Aadmi Party"],
        correctAnswer: "Bharatiya Janata Party",
        Level: "Easy",
        Topic: "Indian Politics"
      },
      {
        question: "Who is known as the 'Iron Lady of India'?",
        options: ["Sonia Gandhi", "Indira Gandhi", "Mamata Banerjee", "Mayawati"],
        correctAnswer: "Indira Gandhi",
        Level: "Easy",
        Topic: "Indian Politics"
      },
      {
        question: "The Indian Parliament consists of how many houses?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "Two",
        Level: "Medium",
        Topic: "Indian Politics"
      },
      {
        question: "Who was the first Deputy Prime Minister of India?",
        options: ["Sardar Patel", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Morarji Desai"],
        correctAnswer: "Sardar Patel",
        Level: "Medium",
        Topic: "Indian Politics"
      },
      {
        question: "Which constitutional amendment lowered the voting age from 21 to 18 years?",
        options: ["42nd Amendment", "61st Amendment", "73rd Amendment", "26th Amendment"],
        correctAnswer: "61st Amendment",
        Level: "Medium",
        Topic: "Indian Politics"
      },
      {
        question: "Which former President of India was also a renowned scientist and known as the 'Missile Man of India'?",
        options: ["A. P. J. Abdul Kalam", "Pranab Mukherjee", "R. Venkataraman", "K. R. Narayanan"],
        correctAnswer: "A. P. J. Abdul Kalam",
        Level: "Medium",
        Topic: "Indian Politics"
      },
      {
        question: "The 'Right to Information Act' was enacted in which year?",
        options: ["2002", "2005", "2010", "2013"],
        correctAnswer: "2005",
        Level: "Medium",
        Topic: "Indian Politics"
      },
      {
        question: "Who was the first woman Chief Minister of an Indian state?",
        options: ["Indira Gandhi", "Jayalalithaa", "Mamata Banerjee", "Sucheta Kriplani"],
        correctAnswer: "Sucheta Kriplani",
        Level: "Hard",
        Topic: "Indian Politics"
      },
      {
        question: "Which Prime Minister of India imposed the state of Emergency in 1975?",
        options: ["Lal Bahadur Shastri", "Morarji Desai", "Indira Gandhi", "Atal Bihari Vajpayee"],
        correctAnswer: "Indira Gandhi",
        Level: "Hard",
        Topic: "Indian Politics"
      },
      {
        question: "Who authored the book 'The Discovery of India'?",
        options: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "B. R. Ambedkar"],
        correctAnswer: "Jawaharlal Nehru",
        Level: "Hard",
        Topic: "Indian Politics"
      },
      {
        question: "Which state was formed as a result of the 1966 States Reorganization Act?",
        options: ["Haryana", "Jharkhand", "Uttarakhand", "Chhattisgarh"],
        correctAnswer: "Haryana",
        Level: "Hard",
        Topic: "Indian Politics"
      },
      {
        question: "The 'Sarva Shiksha Abhiyan' aims to achieve universalization of elementary education in India by which year?",
        options: ["2022", "2025", "2030", "2040"],
        correctAnswer: "2025",
        Level: "Hard",
        Topic: "Indian Politics"
      },
      {
        question: "Which global organization promotes international monetary cooperation and exchange rate stability?",
        options: ["World Bank", "International Monetary Fund", "World Trade Organization", "Asian Development Bank"],
        correctAnswer: "International Monetary Fund",
        Level: "Medium",
        Topic: "International Affairs"
      },
      {
        question: "Which city is the headquarters of the United Nations?",
        options: ["Geneva", "Washington D.C.", "New York", "Brussels"],
        correctAnswer: "New York",
        Level: "Medium",
        Topic: "International Affairs"
      },
      {
        question: "The 'Brexit' refers to the United Kingdom's decision to leave which economic and political union?",
        options: ["European Union", "Commonwealth of Nations", "North Atlantic Treaty Organization", "ASEAN"],
        correctAnswer: "European Union",
        Level: "Medium",
        Topic: "International Affairs"
      },
      {
        question: "Which international organization focuses on public health and disease prevention?",
        options: ["United Nations", "World Health Organization", "World Trade Organization", "World Bank"],
        correctAnswer: "World Health Organization",
        Level: "Medium",
        Topic: "International Affairs"
      },
      {
        question: "The 'G7' group of countries consists of how many major advanced economies?",
        options: ["Five", "Seven", "Ten", "Twelve"],
        correctAnswer: "Seven",
        Level: "Medium",
        Topic: "International Affairs"
      },
      {
        question: "Which international treaty aims to prevent the spread of nuclear weapons and weapons technology?",
        options: ["Montreal Protocol", "Kyoto Protocol", "Non-Proliferation Treaty", "Paris Agreement"],
        correctAnswer: "Non-Proliferation Treaty",
        Level: "Hard",
        Topic: "International Affairs"
      },
      {
        question: "The headquarters of the International Criminal Court (ICC) is located in which city?",
        options: ["The Hague", "Geneva", "New York", "London"],
        correctAnswer: "The Hague",
        Level: "Hard",
        Topic: "International Affairs"
      },
      {
        question: "The 'One Belt, One Road' initiative, also known as the 'Belt and Road Initiative,' is associated with which country?",
        options: ["Russia", "India", "China", "United States"],
        correctAnswer: "China",
        Level: "Hard",
        Topic: "International Affairs"
      },
      {
        question: "The 'Arab Spring' was a series of protests and uprisings that primarily occurred in which region?",
        options: ["Latin America", "Africa", "Middle East", "Asia"],
        correctAnswer: "Middle East",
        Level: "Hard",
        Topic: "International Affairs"
      },
      {
        question: "Which international organization is responsible for regulating international trade?",
        options: ["United Nations", "World Health Organization", "World Trade Organization", "World Bank"],
        correctAnswer: "World Trade Organization",
        Level: "Hard",
        Topic: "International Affairs"
      },
      {
        question: "UNESCO is an agency of the United Nations that focuses on promoting and preserving what?",
        options: ["Global Security", "World Economy", "Cultural Heritage", "Space Exploration"],
        correctAnswer: "Cultural Heritage",
        Level: "Easy",
        Topic: "International Organizations"
      },
      {
        question: "NATO is a military alliance that primarily consists of countries from which part of the world?",
        options: ["Asia", "Africa", "Europe", "South America"],
        correctAnswer: "Europe",
        Level: "Easy",
        Topic: "International Organizations"
      },
      {
        question: "Which international organization is dedicated to the advancement of women's rights and gender equality?",
        options: ["World Health Organization", "United Nations Children's Fund", "Amnesty International", "UN Women"],
        correctAnswer: "UN Women",
        Level: "Easy",
        Topic: "International Organizations"
      },
      {
        question: "The International Monetary Fund (IMF) provides financial assistance and economic advice to promote what?",
        options: ["Global Security", "Human Rights", "Environmental Conservation", "Economic Stability"],
        correctAnswer: "Economic Stability",
        Level: "Easy",
        Topic: "International Organizations"
      },
      {
        question: "Which organization focuses on global health issues, including disease prevention and healthcare improvement?",
        options: ["World Health Organization", "World Trade Organization", "International Criminal Court", "World Bank"],
        correctAnswer: "World Health Organization",
        Level: "Easy",
        Topic: "International Organizations"
      },
      {
        question: "Which international organization aims to protect and promote the rights of children worldwide?",
        options: ["Amnesty International", "UNESCO", "United Nations Children's Fund", "World Trade Organization"],
        correctAnswer: "United Nations Children's Fund",
        Level: "Medium",
        Topic: "International Organizations"
      },
      {
        question: "The North Atlantic Treaty Organization (NATO) was established in response to which historical event?",
        options: ["World War I", "Cold War", "French Revolution", "American Civil War"],
        correctAnswer: "Cold War",
        Level: "Medium",
        Topic: "International Organizations"
      },
      {
        question: "Which organization focuses on promoting international cooperation in the field of space exploration?",
        options: ["European Space Agency", "National Aeronautics and Space Administration", "United Nations Office for Outer Space Affairs", "International Space Station"],
        correctAnswer: "United Nations Office for Outer Space Affairs",
        Level: "Medium",
        Topic: "International Organizations"
      },
      {
        question: "The World Trade Organization (WTO) deals with global trade rules between countries. Where is its headquarters located?",
        options: ["Geneva", "New York", "Brussels", "London"],
        correctAnswer: "Geneva",
        Level: "Medium",
        Topic: "International Organizations"
      },
      {
        question: "Which organization aims to protect human rights and promote justice by investigating and prosecuting serious international crimes?",
        options: ["International Criminal Court", "Amnesty International", "Red Cross", "Doctors Without Borders"],
        correctAnswer: "International Criminal Court",
        Level: "Medium",
        Topic: "International Organizations"
      },
      {
        question: "The International Atomic Energy Agency (IAEA) is an international organization that seeks to promote the peaceful use of what?",
        options: ["Nuclear Weapons", "Space Technology", "Renewable Energy", "Nuclear Energy"],
        correctAnswer: "Nuclear Energy",
        Level: "Hard",
        Topic: "International Organizations"
      },
      {
        question: "Which organization is responsible for addressing global labor standards, social protection, and fair employment practices?",
        options: ["World Trade Organization", "World Health Organization", "International Labour Organization", "United Nations Environment Programme"],
        correctAnswer: "International Labour Organization",
        Level: "Hard",
        Topic: "International Organizations"
      },
      {
        question: "The International Criminal Police Organization, known as INTERPOL, facilitates international police cooperation. Where is its headquarters?",
        options: ["Paris", "New York", "London", "Vienna"],
        correctAnswer: "Paris",
        Level: "Hard",
        Topic: "International Organizations"
      },
      {
        question: "Which international organization promotes international monetary cooperation, exchange rate stability, and balanced economic growth?",
        options: ["World Bank", "United Nations Development Programme", "International Monetary Fund", "World Trade Organization"],
        correctAnswer: "International Monetary Fund",
        Level: "Hard",
        Topic: "International Organizations"
      },
      {
        question: "The United Nations High Commissioner for Refugees (UNHCR) is dedicated to protecting the rights and well-being of refugees. Where is its headquarters located?",
        options: ["New York", "Geneva", "Paris", "Vienna"],
        correctAnswer: "Geneva",
        Level: "Hard",
        Topic: "International Organizations"
      },
      {
        question: "Which iconic monument in India is a UNESCO World Heritage Site and known for its white marble beauty?",
        options: ["Eiffel Tower", "Pyramids of Giza", "Taj Mahal", "Great Wall of China"],
        correctAnswer: "Taj Mahal",
        Level: "Easy",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "Machu Picchu, a famous archaeological site, is located in which country?",
        options: ["Peru", "Mexico", "Egypt", "Greece"],
        correctAnswer: "Peru",
        Level: "Easy",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The ancient city of Petra, known for its rock-cut architecture, is situated in which country?",
        options: ["Egypt", "Jordan", "Turkey", "Iraq"],
        correctAnswer: "Jordan",
        Level: "Easy",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The historic city of Rome includes famous landmarks like the Colosseum and Roman Forum. In which country is it located?",
        options: ["Italy", "Greece", "Spain", "France"],
        correctAnswer: "Italy",
        Level: "Easy",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The Great Barrier Reef, a world-famous coral reef system, is located near which country?",
        options: ["Australia", "Indonesia", "Thailand", "Philippines"],
        correctAnswer: "Australia",
        Level: "Easy",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The historic city of Kyoto, with its temples, shrines, and traditional wooden houses, is a UNESCO World Heritage Site in which country?",
        options: ["China", "South Korea", "Japan", "Vietnam"],
        correctAnswer: "Japan",
        Level: "Medium",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The ancient city of Thebes, including the Valley of the Kings and the Temples of Luxor, is located in which country?",
        options: ["Greece", "Egypt", "Turkey", "Syria"],
        correctAnswer: "Egypt",
        Level: "Medium",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The historical city of Cusco and the nearby ruins of Machu Picchu are UNESCO World Heritage Sites in which South American country?",
        options: ["Chile", "Colombia", "Ecuador", "Peru"],
        correctAnswer: "Peru",
        Level: "Medium",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The archaeological site of Chichen Itza, known for the pyramid 'El Castillo,' is located in which country?",
        options: ["Mexico", "Guatemala", "Honduras", "Belize"],
        correctAnswer: "Mexico",
        Level: "Medium",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "Angkor Wat, the largest religious monument in the world, is a UNESCO World Heritage Site in which country?",
        options: ["Cambodia", "Laos", "Myanmar", "Thailand"],
        correctAnswer: "Cambodia",
        Level: "Medium",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The ancient city of Palmyra, known for its well-preserved ruins, is located in which war-torn country?",
        options: ["Syria", "Iraq", "Afghanistan", "Libya"],
        correctAnswer: "Syria",
        Level: "Hard",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The Historic Centre of Saint Petersburg and its related complexes is a UNESCO World Heritage Site in which country?",
        options: ["Russia", "Germany", "France", "Italy"],
        correctAnswer: "Russia",
        Level: "Hard",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The archaeological site of Pompeii, which was buried by the eruption of Mount Vesuvius, is located in which country?",
        options: ["Italy", "Greece", "Spain", "Turkey"],
        correctAnswer: "Italy",
        Level: "Hard",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The Historic Sanctuary of Machu Picchu is often associated with which ancient civilization?",
        options: ["Maya", "Aztec", "Inca", "Sumerian"],
        correctAnswer: "Inca",
        Level: "Hard",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "The Old City of Jerusalem and its Walls, a site of significant religious importance, is located in which country?",
        options: ["Israel", "Jordan", "Egypt", "Lebanon"],
        correctAnswer: "Israel",
        Level: "Hard",
        Topic: "UNESCO World Heritage Sites"
      },
      {
        question: "Which is the central bank of India responsible for issuing currency and regulating the monetary policy?",
        options: ["State Bank of India", "HDFC Bank", "ICICI Bank", "Reserve Bank of India"],
        correctAnswer: "Reserve Bank of India",
        Level: "Easy",
        Topic: "Banks in India"
      },
      {
        question: "Which is the largest public sector bank in India by assets and branches?",
        options: ["Punjab National Bank", "State Bank of India", "Bank of Baroda", "Canara Bank"],
        correctAnswer: "State Bank of India",
        Level: "Easy",
        Topic: "Banks in India"
      },
      {
        question: "Which bank is known as 'India's International Bank'?",
        options: ["Axis Bank", "ICICI Bank", "Bank of India", "Bank of Baroda"],
        correctAnswer: "Bank of India",
        Level: "Easy",
        Topic: "Banks in India"
      },
      {
        question: "Which Indian bank introduced the concept of 'ATMs' (Automated Teller Machines) for the first time?",
        options: ["ICICI Bank", "HDFC Bank", "Axis Bank", "HSBC India"],
        correctAnswer: "HSBC India",
        Level: "Easy",
        Topic: "Banks in India"
      },
      {
        question: "Which public sector bank was merged with Punjab National Bank in 2020?",
        options: ["Bank of Baroda", "Vijaya Bank", "Andhra Bank", "Oriental Bank of Commerce"],
        correctAnswer: "Oriental Bank of Commerce",
        Level: "Easy",
        Topic: "Banks in India"
      },
      {
        question: "Which Indian bank was founded by the famous industrialist Jamsetji Tata?",
        options: ["Axis Bank", "HDFC Bank", "IDBI Bank", "Indian Bank"],
        correctAnswer: "Axis Bank",
        Level: "Medium",
        Topic: "Banks in India"
      },
      {
        question: "The headquarters of which bank is located in Mumbai and is known as the 'Banker to Every Indian'?",
        options: ["Bank of Maharashtra", "Bank of India", "Canara Bank", "Indian Bank"],
        correctAnswer: "Bank of Maharashtra",
        Level: "Medium",
        Topic: "Banks in India"
      },
      {
        question: "Which private sector bank was founded by Shikha Sharma and is headquartered in Mumbai?",
        options: ["ICICI Bank", "Axis Bank", "HDFC Bank", "Kotak Mahindra Bank"],
        correctAnswer: "Axis Bank",
        Level: "Medium",
        Topic: "Banks in India"
      },
      {
        question: "The tagline 'Good People to Bank with' is associated with which Indian bank?",
        options: ["Punjab National Bank", "Bank of Baroda", "State Bank of India", "Indian Bank"],
        correctAnswer: "Indian Bank",
        Level: "Medium",
        Topic: "Banks in India"
      },
      {
        question: "Which bank is the first Indian bank to be wholly owned by Indians?",
        options: ["Bank of India", "Punjab National Bank", "Canara Bank", "Central Bank of India"],
        correctAnswer: "Central Bank of India",
        Level: "Medium",
        Topic: "Banks in India"
      },
      {
        question: "Which Indian bank was founded by Sir Sorabji Pochkhanawala and was the first to open a branch outside India?",
        options: ["IDBI Bank", "Bank of India", "Punjab National Bank", "Canara Bank"],
        correctAnswer: "Bank of India",
        Level: "Hard",
        Topic: "Banks in India"
      },
      {
        question: "The 'Mangaluru Declaration' of 2015 was associated with which cooperative bank in India?",
        options: ["Saraswat Bank", "Cooperative Bank of Rajkot", "Dombivli Nagari Sahakari Bank", "Shamrao Vithal Cooperative Bank"],
        correctAnswer: "Saraswat Bank",
        Level: "Hard",
        Topic: "Banks in India"
      },
      {
        question: "Which Indian bank introduced the concept of 'Core Banking Solution' (CBS) for the first time in India?",
        options: ["HDFC Bank", "ICICI Bank", "Punjab National Bank", "Bank of Baroda"],
        correctAnswer: "Bank of Baroda",
        Level: "Hard",
        Topic: "Banks in India"
      },
      {
        question: "The private sector bank 'Federal Bank' is headquartered in which Indian state?",
        options: ["Kerala", "Tamil Nadu", "Karnataka", "Maharashtra"],
        correctAnswer: "Kerala",
        Level: "Hard",
        Topic: "Banks in India"
      },
      {
        question: "Which Indian bank was founded by M. A. Chidambaram Chettiar and is headquartered in Chennai?",
        options: ["Lakshmi Vilas Bank", "Karur Vysya Bank", "South Indian Bank", "City Union Bank"],
        correctAnswer: "Lakshmi Vilas Bank",
        Level: "Hard",
        Topic: "Banks in India"
      },
  ];
  
  export default quizData;
  