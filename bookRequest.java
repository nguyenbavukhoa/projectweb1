import java.util.Scanner;
public class bookRequest {
    private String BLCode, memberID,ISBN,dueDATE,returnDate;
    Scanner input=new Scanner(System.in);
    public String getBLCode(){
        return this.BLCode;
    }
    public void setBLCode(String BLCode){
        this.BLCode=BLCode;
    }
            public String getmemberID(){
                return this.memberID;
            }
            public void setmemberID(String memberID){
                this.memberID=memberID;
            }
                    public String getISBN(){
                        return this.ISBN;
                    }
                    public void setISBN(String ISBN){
                        this.ISBN=ISBN;
                    }
                            public String getdueDATE(){
                                return this.dueDATE;
                            }        
                            public void setdueDATE(String dueDATE){
                                this.dueDATE=dueDATE;
                            }
                    public String getreturnDate(){
                        return this.returnDate;
                    }
                    public void setreturnDate(String returnDate){
                        this.returnDate=returnDate;
                    }
            public void inputINFO(){
                System.out.println("enter your information");
                System.out.println("BL Code"); BLCode=input.nextLine();
                System.out.println("member ID"); memberID=input.nextLine();
                System.out.println("ISBN"); ISBN=input.nextLine();
                System.out.println("due date"); dueDATE=input.nextLine();
                System.out.println("return DATE"); returnDate=input.nextLine();
            }
            public void outputINFO(){
                System.out.println("the information of book request");
                System.out.println("BL Code"+BLCode);
                System.out.println("member ID"+memberID);
                System.out.println("ISBN"+ISBN);
                System.out.println("due DATE"+dueDATE);
                System.out.println("return date"+returnDate);  
            }
}
