import { Text, View } from 'react-native';


type ScreenContentProps = {
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ children }: ScreenContentProps) => {
  return (
    <View className='items-center flex-1 justify-center'>
      {/* <Text className='text-red-600 font-bold'>{title}</Text> */}
      <View className={styles.separator} />
      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
