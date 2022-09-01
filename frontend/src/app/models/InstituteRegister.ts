export class InstituteRegister {
  constructor(
    public InstituteCategory: string = '',
    public State: string = '',
    public District: string = '',
    public InstituteName: string = '',
    public InstituteCode: string = '',
    public DiseCode: string = '',
    public Location: string = '',
    public InstituteType: string = '',
    public AffliatedUniversityState: string = '',
    public AffliatedUniversityName: string = '',
    public YearOfAddmission: string = '',
    public Password: string = '',
    public Password2: string = '',
    public AddressLine1: string = '',
    public AddressLine2: string = '',
    public AddressCity: string = '',
    public AddressState: string = '',
    public AddressDistrict: string = '',
    public AddressPincode: number | null = null,
    public PrincipalName: string = '',
    public MobileNumber: string = '',
    public Telephone: string = '',
    public RegistrationCertificate: string = '',
    public UniversityAffliationCertificate: string = ''
  ) {}
}
