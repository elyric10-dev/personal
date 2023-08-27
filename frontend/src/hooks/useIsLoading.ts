import { useState } from "react";

const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return { isLoading, handleLoadingComplete };
};

export default useIsLoading;
