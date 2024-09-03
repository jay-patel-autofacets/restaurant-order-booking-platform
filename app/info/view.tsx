import { IMain } from "./../_lib/types";

export default async function View({ info }: Readonly<{ info: IMain['data']['info'] }>) {
  return (
    <div className="bg-white/70 p-16 flex flex-col gap-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt risus quis purus convallis mattis. Morbi vel accumsan risus. Duis gravida orci turpis, ut fringilla sem gravida vitae. Etiam sem ligula, lacinia a feugiat vel, accumsan viverra sapien. Mauris convallis nunc risus, non ultrices ex mattis sed. Vestibulum eget vulputate urna. Pellentesque eros dolor, hendrerit id imperdiet et, ornare eu elit. Aliquam erat volutpat. Duis faucibus pellentesque ante, eu feugiat justo pulvinar in. Aenean erat nisi, placerat in justo ut, bibendum maximus libero. </p>
        <p> Vestibulum viverra pharetra nulla ut semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sagittis lobortis eros, a laoreet ipsum molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum scelerisque imperdiet rhoncus. In purus quam, rhoncus sed tincidunt a, ultrices ut velit. Nam dapibus erat ac urna facilisis pretium. Nam vitae tellus tristique, dignissim libero et, aliquet risus. Phasellus maximus, sem vel aliquet condimentum, nulla lacus dignissim nisi, quis eleifend enim nulla non nunc. Nullam suscipit mi a enim consectetur, ut viverra mauris scelerisque. Quisque sodales, justo ac malesuada condimentum, augue tortor lobortis diam, vel luctus sem magna sit amet justo. Aliquam erat volutpat. Mauris ac libero eget lectus dignissim luctus a at dolor. Nullam ultricies finibus porttitor. </p>
    </div>
  );
}
