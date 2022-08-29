export class ScholarshipApplication {
  constructor(
    public AadharNumber: string = '', //check
    public Community: string = '', // check
    public FatherName: string = '', // check
    public MotherName: string = '', // check
    public Religion: string = '', // check
    public AnnualIncome: string = '', // check
    public InstituteName: string = '', // check - fetch from database
    public PresentCourse: string = '', //check
    public PresentCourseYear: string = '', //check
    public ModeOfStudy: string = '', //check
    public ClassStartDate: string = '', //check - again
    public UniversityBoardName: string = '', //check
    public PreviousCourse: string = '', //check
    public PreviousPassingYear: string = '', //check
    public PreviousClassPercentage: string = '', //check
    public RollNo10: string = '', //check
    public BoardName10: string = '', //check
    public PassingYear10: string = '', //check
    public Percentage10: string = '', //check
    public RollNo12: string = '', //check
    public BoardName12: string = '', //check
    public PassingYear12: string = '', //check
    public Percentage12: string = '', //check
    public AddmissionFee: string = '', //check
    public TutionFee: string = '', //check
    public OtherFee: string = '', //check
    public IsDisabled: string = '', //check
    public TypeOfDisability: string = '', //check
    public PercentageDisability: string = '', //check
    public MartialStatus: string = '', //check
    public ParentProfession: string = '', //check
    public State: string = '', //check
    public District: string = '', //check
    public Block: string = '', //check
    public HouseNumber: string = '', //check
    public StreetNumber: string = '', //check
    public Pincode: string = '', //check
    public SchemeId: number = 0, //check-get from server
    public InstituteCode: string = ''
  ) {}
}
