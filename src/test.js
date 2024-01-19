const statesWithLocalGovernments = {
    "Abia": ["Aba North", "Aba South", "Arochukwu", "Bende", "Isiala Ngwa North"],
    "Adamawa": ["Demsa", "Fufore", "Ganye", "Girei", "Gombi"],
    "Akwa Ibom": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim"],
    "Anambra": ["Aguata", "Anambra East", "Anambra West", "Awka North", "Awka South"],
    "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo"],
    "Bayelsa": ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia"],
    "Benue": ["Ado", "Agatu", "Apa", "Buruku", "Gboko"],
    "Borno": ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biase"],
    "Cross River": ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra"],
    "Delta": ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East"],
    "Ebonyi": ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North"],
    "Edo": ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East"],
    "Ekiti": ["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Emure"],
    "Enugu": ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South"],
    "Gombe": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye"],
    "Imo": ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North"],
    "Jigawa": ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji"],
    "Kaduna": ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara"],
    "Kano": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi"],
    "Katsina": ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa"],
    "Kebbi": ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo"],
    "Kogi": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina"],
    "Kwara": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun"],
    "Lagos": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa"],
    "Nasarawa": ["Awe", "Doma", "Karu", "Keana", "Keffi"],
    "Niger": ["Agaie", "Agwara", "Bida", "Borgu", "Bosso"],
    "Ogun": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ewekoro", "Ifo"],
    "Ondo": ["Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North"],
    "Osun": ["Aiyedaade", "Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boluwaduro"],
    "Oyo": ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda"],
    "Plateau": ["Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North"],
    "Rivers": ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni"],
    "Sokoto": ["Binji", "Bodinga", "Dange/Shuni", "Gada", "Goronyo"],
    "Taraba": ["Ardo-Kola", "Bali", "Donga", "Gashaka", "Gassol"],
    "Yobe": ["Bade", "Bursari", "Damaturu", "Fika", "Geidam"],
    "Zamfara": ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu"],
    "Federal Capital Territory": ["Abaji", "Gwagwalada", "Kuje", "Bwari", "Kwali"]
  };

  // Convert to the desired format
  const convertedData = {};
  for (const state in statesWithLocalGovernments) {
    const lgasArray = statesWithLocalGovernments[state].map(lga => ({ value: lga, label: lga }));
    convertedData[state] = lgasArray;
  }

  console.log(convertedData);
