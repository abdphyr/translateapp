import { FC, createContext, useContext, useState, SetStateAction } from 'react';

interface ITransData {
  data: {
    translations: {
      translatedText: string;
    }
  }
}

interface IAppContext {
  source: string;
  setSource: React.Dispatch<SetStateAction<string>>;
  target: string;
  setTarget: React.Dispatch<SetStateAction<string>>;
  transData: ITransData,
  setTransData: React.Dispatch<SetStateAction<ITransData>>
}

const AppContext = createContext<IAppContext>({
  source: '',
  setSource: () => null,
  target: '',
  setTarget: () => null,
  transData: {
    data: {
      translations: {
        translatedText: ''
      }
    }
  },
  setTransData: () => null
})

const ContextProvider: FC = ({ children }) => {
  const [source, setSource] = useState('')
  const [target, setTarget] = useState('')
  const [transData, setTransData] = useState({
    data: {
      translations: {
        translatedText: ''
      }
    }
  })
  return (
    <AppContext.Provider value={{ source, target, transData, setSource, setTarget, setTransData }}>
      {children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
export const useGetStore = () => useContext(AppContext)