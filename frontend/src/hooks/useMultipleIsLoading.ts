import { useState } from "react";
import { type projectImagesLinkProps } from "~/shared/utils/types";

const useMultipleIsLoading = (items: projectImagesLinkProps[] | undefined) => {
  const [isLoading, setIsLoading] = useState<boolean[]>(
    Array(items?.length).fill(true)
  );

  const handleLoadingComplete = (index: number) => {
    const updatedIsLoading = [...isLoading];
    updatedIsLoading[index] = true;
    setIsLoading(updatedIsLoading);
  };
  return { isLoading, handleLoadingComplete };
};

export default useMultipleIsLoading;
