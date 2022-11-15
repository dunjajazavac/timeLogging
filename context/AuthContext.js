export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState('');
  const [splashLoading, setSplashLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [issues, setIssues] = useState();
  const [itemsIssues, setItemsIssues] = useState();
  const [itemsProjects, setItemsProjects] = useState();
  const [currentProject, setCurrentProject] = useState();
  const [currentIssue, setCurrentIssue] = useState();
  const [itemsTimeEntries, setItemsTimeEntries] = useState();
  const [currentIssueName, setCurrentIssueName] = useState();
  const [currentProjectName, setCurrentProjectName] = useState();
  const [currentActivityType, setCurrentActivityType] = useState();
  const [currentActivityName, setCurrentActivityName] = useState();
  const [currentHours, setCurrentHours] = useState('');
  const [currentComment, setCurrentComment] = useState();
  const [currentTimeEntry, setCurrentTimeEntry] = useState('');
  const [currentDate, setCurrentDate] = useState();
  const [currentUser, setCurrentUser] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [currentProjectDesc, setCurrentProjectDesc] = useState('');
  const [isRefreshed, setIsRefreshed] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const login = (username, password) => {
    setSplashLoading(true);
    axios
      .get('https://redmine.qualityhouse.rs/users/current.json', {
        method: 'GET',
        mode: 'no-cors',
        headers: {},
        auth: {
          username: username.username,
          password: password.password,
        },
      })
      .then((response) => {
        setToken(response.data.user.api_key);
        setUserId(response.data.user.id);
        AsyncStorage.setItem('TOKEN', response.data.user.api_key);
        let id = response.data.user.id;
        id = id.toString();
        AsyncStorage.setItem('userId', id);
        setSplashLoading(false);
        setIsFocused(true);
      })
      .catch((err) => {
        setToken('');
        setUserId('');
        setSplashLoading(false);
        Alert.alert(
          'Authenticate failed.',
          'Try again.',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: true }
        );
      });
  };
