import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class StudentRegister {
  constructor(
    public StateOfDomicile: string = '',
    public District: string = '',
    public Gender: string = '',
    public StudentName: string = '',
    public Email: string = '',
    public PhoneNo: string = '',
    public InstituteCode: string = '',
    public DateOfBirth: string = '',
    public AadharNumber: string = '',
    public BankIfscCode: string = '',
    public BankAccountNumber: string = '',
    public BankName: string = '',
    public Password: string = '',
    public Password2: string = ''
  ) {}
}
