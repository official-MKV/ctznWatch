 const statesInNigeria = [
    { value: "Abia", label: "Abia" },
    { value: "Adamawa", label: "Adamawa" },
    { value: "Akwa Ibom", label: "Akwa Ibom" },
    { value: "Anambra", label: "Anambra" },
    { value: "Bauchi", label: "Bauchi" },
    { value: "Bayelsa", label: "Bayelsa" },
    { value: "Benue", label: "Benue" },
    { value: "Borno", label: "Borno" },
    { value: "Cross River", label: "Cross River" },
    { value: "Delta", label: "Delta" },
    { value: "Ebonyi", label: "Ebonyi" },
    { value: "Edo", label: "Edo" },
    { value: "Ekiti", label: "Ekiti" },
    { value: "Enugu", label: "Enugu" },
    { value: "Gombe", label: "Gombe" },
    { value: "Imo", label: "Imo" },
    { value: "Jigawa", label: "Jigawa" },
    { value: "Kaduna", label: "Kaduna" },
    { value: "Kano", label: "Kano" },
    { value: "Katsina", label: "Katsina" },
    { value: "Kebbi", label: "Kebbi" },
    { value: "Kogi", label: "Kogi" },
    { value: "Kwara", label: "Kwara" },
    { value: "Lagos", label: "Lagos" },
    { value: "Nasarawa", label: "Nasarawa" },
    { value: "Niger", label: "Niger" },
    { value: "Ogun", label: "Ogun" },
    { value: "Ondo", label: "Ondo" },
    { value: "Osun", label: "Osun" },
    { value: "Oyo", label: "Oyo" },
    { value: "Plateau", label: "Plateau" },
    { value: "Rivers", label: "Rivers" },
    { value: "Sokoto", label: "Sokoto" },
    { value: "Taraba", label: "Taraba" },
    { value: "Yobe", label: "Yobe" },
    { value: "Zamfara", label: "Zamfara" },
    { value: "Federal Capital Territory", label: "Federal Capital Territory" },
  ];
const statesWithLocalGovernments = {
  Abia: [
    { value: 'Aba North', label: 'Aba North' },
    { value: 'Aba South', label: 'Aba South' },
    { value: 'Arochukwu', label: 'Arochukwu' },
    { value: 'Bende', label: 'Bende' },
    { value: 'Isiala Ngwa North', label: 'Isiala Ngwa North' }
  ],
  Adamawa: [
    { value: 'Demsa', label: 'Demsa' },
    { value: 'Fufore', label: 'Fufore' },
    { value: 'Ganye', label: 'Ganye' },
    { value: 'Girei', label: 'Girei' },
    { value: 'Gombi', label: 'Gombi' }
  ],
  'Akwa Ibom': [
    { value: 'Abak', label: 'Abak' },
    { value: 'Eastern Obolo', label: 'Eastern Obolo' },
    { value: 'Eket', label: 'Eket' },
    { value: 'Esit Eket', label: 'Esit Eket' },
    { value: 'Essien Udim', label: 'Essien Udim' }
  ],
  Anambra: [
    { value: 'Aguata', label: 'Aguata' },
    { value: 'Anambra East', label: 'Anambra East' },
    { value: 'Anambra West', label: 'Anambra West' },
    { value: 'Awka North', label: 'Awka North' },
    { value: 'Awka South', label: 'Awka South' }
  ],
  Bauchi: [
    { value: 'Alkaleri', label: 'Alkaleri' },
    { value: 'Bauchi', label: 'Bauchi' },
    { value: 'Bogoro', label: 'Bogoro' },
    { value: 'Damban', label: 'Damban' },
    { value: 'Darazo', label: 'Darazo' }
  ],
  Bayelsa: [
    { value: 'Brass', label: 'Brass' },
    { value: 'Ekeremor', label: 'Ekeremor' },
    { value: 'Kolokuma/Opokuma', label: 'Kolokuma/Opokuma' },
    { value: 'Nembe', label: 'Nembe' },
    { value: 'Ogbia', label: 'Ogbia' }
  ],
  Benue: [
    { value: 'Ado', label: 'Ado' },
    { value: 'Agatu', label: 'Agatu' },
    { value: 'Apa', label: 'Apa' },
    { value: 'Buruku', label: 'Buruku' },
    { value: 'Gboko', label: 'Gboko' }
  ],
  Borno: [
    { value: 'Abadam', label: 'Abadam' },
    { value: 'Askira/Uba', label: 'Askira/Uba' },
    { value: 'Bama', label: 'Bama' },
    { value: 'Bayo', label: 'Bayo' },
    { value: 'Biase', label: 'Biase' }
  ],
  'Cross River': [
    { value: 'Abi', label: 'Abi' },
    { value: 'Akamkpa', label: 'Akamkpa' },
    { value: 'Akpabuyo', label: 'Akpabuyo' },
    { value: 'Bakassi', label: 'Bakassi' },
    { value: 'Bekwarra', label: 'Bekwarra' }
  ],
  Delta: [
    { value: 'Aniocha North', label: 'Aniocha North' },
    { value: 'Aniocha South', label: 'Aniocha South' },
    { value: 'Bomadi', label: 'Bomadi' },
    { value: 'Burutu', label: 'Burutu' },
    { value: 'Ethiope East', label: 'Ethiope East' }
  ],
  Ebonyi: [
    { value: 'Abakaliki', label: 'Abakaliki' },
    { value: 'Afikpo North', label: 'Afikpo North' },
    { value: 'Afikpo South', label: 'Afikpo South' },
    { value: 'Ebonyi', label: 'Ebonyi' },
    { value: 'Ezza North', label: 'Ezza North' }
  ],
  Edo: [
    { value: 'Akoko-Edo', label: 'Akoko-Edo' },
    { value: 'Egor', label: 'Egor' },
    { value: 'Esan Central', label: 'Esan Central' },
    { value: 'Esan North-East', label: 'Esan North-East' },
    { value: 'Esan South-East', label: 'Esan South-East' }
  ],
  Ekiti: [
    { value: 'Ado Ekiti', label: 'Ado Ekiti' },
    { value: 'Efon', label: 'Efon' },
    { value: 'Ekiti East', label: 'Ekiti East' },
    { value: 'Ekiti South-West', label: 'Ekiti South-West' },
    { value: 'Emure', label: 'Emure' }
  ],
  Enugu: [
    { value: 'Aninri', label: 'Aninri' },
    { value: 'Awgu', label: 'Awgu' },
    { value: 'Enugu East', label: 'Enugu East' },
    { value: 'Enugu North', label: 'Enugu North' },
    { value: 'Enugu South', label: 'Enugu South' }
  ],
  Gombe: [
    { value: 'Akko', label: 'Akko' },
    { value: 'Balanga', label: 'Balanga' },
    { value: 'Billiri', label: 'Billiri' },
    { value: 'Dukku', label: 'Dukku' },
    { value: 'Funakaye', label: 'Funakaye' }
  ],
  Imo: [
    { value: 'Aboh Mbaise', label: 'Aboh Mbaise' },
    { value: 'Ahiazu Mbaise', label: 'Ahiazu Mbaise' },
    { value: 'Ehime Mbano', label: 'Ehime Mbano' },
    { value: 'Ezinihitte', label: 'Ezinihitte' },
    { value: 'Ideato North', label: 'Ideato North' }
  ],
  Jigawa: [
    { value: 'Auyo', label: 'Auyo' },
    { value: 'Babura', label: 'Babura' },
    { value: 'Biriniwa', label: 'Biriniwa' },
    { value: 'Birnin Kudu', label: 'Birnin Kudu' },
    { value: 'Buji', label: 'Buji' }
  ],
  Kaduna: [
    { value: 'Birnin Gwari', label: 'Birnin Gwari' },
    { value: 'Chikun', label: 'Chikun' },
    { value: 'Giwa', label: 'Giwa' },
    { value: 'Igabi', label: 'Igabi' },
    { value: 'Ikara', label: 'Ikara' }
  ],
  Kano: [
    { value: 'Ajingi', label: 'Ajingi' },
    { value: 'Albasu', label: 'Albasu' },
    { value: 'Bagwai', label: 'Bagwai' },
    { value: 'Bebeji', label: 'Bebeji' },
    { value: 'Bichi', label: 'Bichi' }
  ],
  Katsina: [
    { value: 'Bakori', label: 'Bakori' },
    { value: 'Batagarawa', label: 'Batagarawa' },
    { value: 'Batsari', label: 'Batsari' },
    { value: 'Baure', label: 'Baure' },
    { value: 'Bindawa', label: 'Bindawa' }
  ],
  Kebbi: [
    { value: 'Aleiro', label: 'Aleiro' },
    { value: 'Arewa Dandi', label: 'Arewa Dandi' },
    { value: 'Argungu', label: 'Argungu' },
    { value: 'Augie', label: 'Augie' },
    { value: 'Bagudo', label: 'Bagudo' }
  ],
  Kogi: [
    { value: 'Adavi', label: 'Adavi' },
    { value: 'Ajaokuta', label: 'Ajaokuta' },
    { value: 'Ankpa', label: 'Ankpa' },
    { value: 'Bassa', label: 'Bassa' },
    { value: 'Dekina', label: 'Dekina' }
  ],
  Kwara: [
    { value: 'Asa', label: 'Asa' },
    { value: 'Baruten', label: 'Baruten' },
    { value: 'Edu', label: 'Edu' },
    { value: 'Ekiti', label: 'Ekiti' },
    { value: 'Ifelodun', label: 'Ifelodun' }
  ],
  Lagos: [
    { value: 'Agege', label: 'Agege' },
    { value: 'Ajeromi-Ifelodun', label: 'Ajeromi-Ifelodun' },
    { value: 'Alimosho', label: 'Alimosho' },
    { value: 'Amuwo-Odofin', label: 'Amuwo-Odofin' },
    { value: 'Apapa', label: 'Apapa' }
  ],
  Nasarawa: [
    { value: 'Awe', label: 'Awe' },
    { value: 'Doma', label: 'Doma' },
    { value: 'Karu', label: 'Karu' },
    { value: 'Keana', label: 'Keana' },
    { value: 'Keffi', label: 'Keffi' }
  ],
  Niger: [
    { value: 'Agaie', label: 'Agaie' },
    { value: 'Agwara', label: 'Agwara' },
    { value: 'Bida', label: 'Bida' },
    { value: 'Borgu', label: 'Borgu' },
    { value: 'Bosso', label: 'Bosso' }
  ],
  Ogun: [
    { value: 'Abeokuta North', label: 'Abeokuta North' },
    { value: 'Abeokuta South', label: 'Abeokuta South' },
    { value: 'Ado-Odo/Ota', label: 'Ado-Odo/Ota' },
    { value: 'Ewekoro', label: 'Ewekoro' },
    { value: 'Ifo', label: 'Ifo' }
  ],
  Ondo: [
    { value: 'Akoko North-East', label: 'Akoko North-East' },
    { value: 'Akoko North-West', label: 'Akoko North-West' },
    { value: 'Akoko South-East', label: 'Akoko South-East' },
    { value: 'Akoko South-West', label: 'Akoko South-West' },
    { value: 'Akure North', label: 'Akure North' }
  ],
  Osun: [
    { value: 'Aiyedaade', label: 'Aiyedaade' },
    { value: 'Aiyedire', label: 'Aiyedire' },
    { value: 'Atakunmosa East', label: 'Atakunmosa East' },
    { value: 'Atakunmosa West', label: 'Atakunmosa West' },
    { value: 'Boluwaduro', label: 'Boluwaduro' }
  ],
  Oyo: [
    { value: 'Afijio', label: 'Afijio' },
    { value: 'Akinyele', label: 'Akinyele' },
    { value: 'Atiba', label: 'Atiba' },
    { value: 'Atisbo', label: 'Atisbo' },
    { value: 'Egbeda', label: 'Egbeda' }
  ],
  Plateau: [
    { value: 'Barkin Ladi', label: 'Barkin Ladi' },
    { value: 'Bassa', label: 'Bassa' },
    { value: 'Bokkos', label: 'Bokkos' },
    { value: 'Jos East', label: 'Jos East' },
    { value: 'Jos North', label: 'Jos North' }
  ],
  Rivers: [
    { value: 'Abua/Odual', label: 'Abua/Odual' },
    { value: 'Ahoada East', label: 'Ahoada East' },
    { value: 'Ahoada West', label: 'Ahoada West' },
    { value: 'Akuku-Toru', label: 'Akuku-Toru' },
    { value: 'Andoni', label: 'Andoni' }
  ],
  Sokoto: [
    { value: 'Binji', label: 'Binji' },
    { value: 'Bodinga', label: 'Bodinga' },
    { value: 'Dange/Shuni', label: 'Dange/Shuni' },
    { value: 'Gada', label: 'Gada' },
    { value: 'Goronyo', label: 'Goronyo' }
  ],
  Taraba: [
    { value: 'Ardo-Kola', label: 'Ardo-Kola' },
    { value: 'Bali', label: 'Bali' },
    { value: 'Donga', label: 'Donga' },
    { value: 'Gashaka', label: 'Gashaka' },
    { value: 'Gassol', label: 'Gassol' }
  ],
  Yobe: [
    { value: 'Bade', label: 'Bade' },
    { value: 'Bursari', label: 'Bursari' },
    { value: 'Damaturu', label: 'Damaturu' },
    { value: 'Fika', label: 'Fika' },
    { value: 'Geidam', label: 'Geidam' }
  ],
  Zamfara: [
    { value: 'Anka', label: 'Anka' },
    { value: 'Bakura', label: 'Bakura' },
    { value: 'Birnin Magaji/Kiyaw', label: 'Birnin Magaji/Kiyaw' },
    { value: 'Bukkuyum', label: 'Bukkuyum' },
    { value: 'Bungudu', label: 'Bungudu' }
  ],
  'Federal Capital Territory': [
    { value: 'Abaji', label: 'Abaji' },
    { value: 'Gwagwalada', label: 'Gwagwalada' },
    { value: 'Kuje', label: 'Kuje' },
    { value: 'Bwari', label: 'Bwari' },
    { value: 'Kwali', label: 'Kwali' }
  ]
}

  // For a complete list, you may need to consult official government sources or use APIs that provide this data.
export {statesWithLocalGovernments, statesInNigeria};
