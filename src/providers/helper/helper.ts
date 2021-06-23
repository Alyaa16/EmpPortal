import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HelperProvider {
  mySide:any=""
  Payroll_ID:any
  is_login:boolean=true
  language:any
  Emp_ID:any
  User_Id:any
  brabch:any
  Org_ID:any
  notifications_no:any
  Emp_PhotoPath:any
  token:any
  PlayerID:any
  base_url:string="https://empportalapi.careofme.net/api/"
      
    //http://192.168.1.160:1010/api/
    
    //https://empportalapi.careofme.net/

    // "http://192.168.1.160/ftphrms/TempFiles/Temp/04480303-0c9e-4be2-8339-5be89eb5571b.png
    // split('/') with the last index
  constructor(public http: HttpClient,private translate: TranslateService) {

  }

  set_PlayerID(va){
    this.PlayerID=va
  }

  set_token(va){
    this.token=va
  }

  set_Org_ID(va){
    this.Org_ID=va
  }

  set_is_login(va){
    this.is_login=va
  }

  set_language(va){
    this.language=va
  }

  set_Emp_ID(va){
    this.Emp_ID=va
  }

  set_mySide(va){
    console.log("now side is :"+va)
    this.mySide=va
  }
  
  set_User_Id(va){
    this.User_Id=va
  }

  set_branch(va){
    this.brabch=va
  }

  set_notifications_no(va){
    this.notifications_no=va
  }

  set_Emp_PhotoPath(va){
    this.Emp_PhotoPath=va
  }

  set_Payroll_ID(va){
    this.Payroll_ID=va
  }

  changeLanguage(va)
  {
    this.translate.use(va)
    this.translate.setDefaultLang(va)
  }  
  
}
