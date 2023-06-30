import { useState, useEffect } from 'react';
import * as S from './styles';

const Loading = ({ setIsLoading }) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage > 100 ? 100 : newPercentage;
      });
    }, 600);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (loadingPercentage === 100) {
      setIsLoading(false);
    }
  }, [loadingPercentage, setIsLoading]);

  return (
    <S.Container>
      <S.Bar>
        <S.Fill percentage={loadingPercentage} />
      </S.Bar>
    </S.Container>
  );
};

export default Loading;
