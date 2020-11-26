import java.util.Scanner;
import java.utils.*;

class test{
    static int FindMinNumber(int arr[], int n, int k){ 
        int i = 0; 
        int j = 0; 
        int min_num = Integer.MAX_VALUE; 
        boolean found = false; 
        int sum = 0; 
        while (i < n){ 
            sum = sum + arr[i]; 
            if (sum == k){ 
                min_num = Math.min(min_num,((n - (i + 1)) + j)); 
                found = true; 
            }
            else if (sum > k){
                while (sum > k){ 
                    sum = sum - arr[j]; 
                    j++; 
                } 
                if (sum == k)  { 
                    min_num = Math.min(min_num,((n - (i + 1)) + j)); 
                    found = true; 
                } 
            } 
    
            i++; 
        } 
    
        if (found) 
            return min_num; 
    
        return -1; 
} 
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] a=new int[n];
        int sum=0;
        for(int i=0;i<n;i++){
            a[i]=sc.nextInt();
            sum=sum+a[i];
        }
        int k=sc.nextInt();
        int m=sc.nextInt();
        boolean ros=true;
        sum=sum-k;
        if(sum<=0){
            ros=false;
        }
        int rem=sum%m;
        sum=sum-rem+k;
        if(ros)
        System.out.println(FindMinNumber(a, n, sum));
        else{
            System.out.println(-1);
        }sif(sum<=0){
            ros=false;
        }

           
            
    }
}


