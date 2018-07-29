const ApplicationsData = [
  {id: 0, name: 'Quintin Ed', description: 'Love Coding in Java', registered: '2018/01/01', role: 'Developer', status: 'New', applied:'2018-04-23'},
  {id: 1, name: 'Samppa Nori', description: 'Java Developer, passionate about Vuejs', registered: '2018/01/01', role: 'Developer', status: 'New', applied:'2018-04-23'},
  {id: 2, name: 'Estavan Lykos', description: 'Enjoy Coding in Java', registered: '2018/02/01', role: 'Developer', status: 'New', applied:'2018-04-23'},
  {id: 3, name: 'Chetan Mohamed', description: 'Freelance Java Developer', registered: '2018/02/01', role: 'Developer', status: 'New', applied:'2018-04-23'},
  {id: 4, name: 'Derick Maximinus', description: 'Java Developer from NCS', registered: '2018/03/01', role: 'Developer', status: 'New', applied:'2018-04-23'},
  {id: 5, name: 'Friderik Dávid', description: 'Developed 5 web apps with Java', registered: '2018/01/21', role: 'Developer', status: 'New', applied:'2018-04-25'},
  {id: 6, name: 'Yiorgos Avraamu', description: '3 years of SLDC experience', registered: '2018/01/01', role: 'Developer', status: 'Invited', applied:'2018-04-23'},
  {id: 7, name: 'Avram Tarasios', description: 'Experienced .NET developer', registered: '2018/02/01', role: 'Developer', status: 'Invited', applied:'2018-04-23'},
  {id: 8, name: 'Quintin Ed', description: 'Rich experience in Sharepoint', registered: '2018/02/01', role: 'Developer', status: 'Invited', applied:'2018-04-23'},
  {id: 9, name: 'Enéas Kwadwo', description: 'Specialised in developing ERP and CRM systems', registered: '2018/03/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-25'},
  {id: 10, name: 'Agapetus Tadeáš', description: 'Proficient in most front-end technologies', registered: '2018/01/21', role: 'Developer', status: 'Reviewed', applied:'2018-04-24'},
  {id: 11, name: 'Carwyn Fachtna', description: 'Highly experienced in developing micro services in Java', registered: '2018/01/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-24'},
  {id: 12, name: 'Nehemiah Tatius', description: 'Strong experience in building responsive applications', registered: '2018/02/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-25'},
  {id: 13, name: 'Ebbe Gemariah', description: 'Proficient in LAMP stack', registered: '2018/02/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-23'},
  {id: 14, name: 'Eustorgios Amulius', description: '2 years of Android development experience', registered: '2018/03/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-24'},
  {id: 15, name: 'Leopold Gáspár', description: 'Proficient in Linux and back-end technologies', registered: '2018/01/21', role: 'Developer', status: 'Reviewed', applied:'2018-04-24'},
  {id: 16, name: 'Pompeius René', description: '10 years of full-stack experience', registered: '2018/01/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-25'},
  {id: 17, name: 'Paĉjo Jadon', description: 'Highly proficient in functional programming', registered: '2018/02/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-25'},
  {id: 18, name: 'Micheal Mercurius', description: '3 years of Android development experience', registered: '2018/02/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-23'},
  {id: 19, name: 'Ganesha Dubhghall', description: 'RPA developer with interest in front-end technologies', registered: '2018/03/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-25'},
  {id: 20, name: 'Hiroto Šimun', description: 'Experienced in embedded software development', registered: '2018/01/21', role: 'Developer', status: 'Reviewed', applied:'2018-04-24'},
  {id: 21, name: 'Vishnu Serghei', description: 'Proficient in Spring Framework and Java technologies', registered: '2018/01/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-24'},
  {id: 22, name: 'Zbyněk Phoibos', description: 'Close to 4 years of experience in Javascript and HTML/CSS', registered: '2018/02/01', role: 'Developer', status: 'Reviewed', applied:'2018-04-25'},
  {id: 23, name: 'Einar Randall', description: 'Passionate developer with high proficiency in database technologies', registered: '2018/02/01', role: 'Developer', status: 'Rejected', applied:'2018-04-24'},
  {id: 24, name: 'Félix Troels', description: 'Proficient in Python and R', registered: '2018/03/21', role: 'Developer', status: 'Rejected', applied:'2018-04-25'},
  {id: 25, name: 'Aulus Agmundr', description: '3 years of experience in PHP and Laravel', registered: '2018/01/01', role: 'Developer', status: 'Rejected', applied:'2018-04-25'},
  {id: 26, name: 'Ford Prefex', description: '3 years of experience in Objective-C/Swift', registered: '2001/05/21', role: 'Developer', status: 'Rejected', applied:'2018-04-23'},
  {id: 27, name: 'Melezio Carmine', description: 'Working knowledge of Java', registered: '2001/05/21', role: 'Developer', status: 'Rejected', applied:'2018-04-23'},
  {id: 28, name: 'Palladio Mingo', description: 'Proficient in MSSQL and OracleDB', registered: '2018/03/21', role: 'Developer', status: 'Rejected', applied:'2018-04-24'},
  {id: 29, name: 'Alcino D Adamo', description: '3 years of experience developing web-based applications', registered: '2018/01/01', role: 'Developer', status: 'Rejected', applied:'2018-04-23'},
  {id: 30, name: 'Salvatore Filippini', description: 'Rich experience in both Java and .NET', registered: '2001/05/21', role: 'Developer', status: 'Rejected', applied:'2018-04-23'},
  {id: 31, name: 'Aniceto Bovino', description: 'Proficient in cloud technologies', registered: '2001/05/21', role: 'Developer', status: 'Rejected', applied:'2018-04-24'}
 

]

export default ApplicationsData
