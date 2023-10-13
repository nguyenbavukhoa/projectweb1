import java.util.Scanner;
public class HTsinhvien 
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);
        int nGrad,nUnder,n;
        System.out.println("Enter registration number :"); n = scanner.nextInt();
        System.out.println("Gradstudent:");nGrad = scanner.nextInt();
        System.out.println("UnderGradstudent:");nUnder = scanner.nextInt();
        if(nGrad+nUnder==n)
        {
        Undergradstudent[] Under=new Undergradstudent[nUnder+1];
        Gradstudent[] Grad=new Gradstudent[nGrad+1];
        CLclass[] clgrad=new CLclass[nGrad+1];
        CLclass[] clunder=new CLclass[nUnder+1];
        List l=new List();
            l.register(n, Under, Grad, clunder, clgrad, scanner);
            l.print(clunder, clgrad, Under, Grad, scanner);
        }
        else 
        {
            System.out.println("Vui long nhap lai !!! ");
            System.out.println("Enter registration number :"); n = scanner.nextInt();
            System.out.println("Gradstudent:");nGrad = scanner.nextInt();
            System.out.println("UnderGradstudent:");nUnder = scanner.nextInt();
        }
       
        scanner.close();
    }
    
}
